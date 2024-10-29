import { Prisma, PrismaClient } from "../generated/postgresql";
import {
  QueryMiddlewareFactory,
  QueryMiddleware,
} from "../middleware/query.middleware";
import { QueryOptions, RequestContext } from "../middleware/types";

/**
 * Table-specific query implementation with type-safe methods
 * and proper access control enforcement.
 */
export class AddressTableQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context);
    this.prisma = prisma;
  }

  /**
   * Address Queries
   */
  async getAddresses(
    options?: QueryOptions & {
      addressableType?: string;
      addressType?: string;
      entityId?: number;
    },
  ) {
    const { addressableType, addressType, entityId, ...queryOptions } =
      options || {};

    let whereClause: any = {};

    if (addressableType) {
      whereClause.addressable_type = addressableType;
    }

    if (addressType) {
      whereClause.address_type = addressType;
    }

    if (entityId) {
      whereClause[`${addressableType?.toLowerCase()}_id`] = entityId;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "findMany",
      {
        where: whereClause,
      },
      queryOptions,
    );
  }

  async createAddress(data: {
    addressable_type: string;
    entity_id: number;
    address_type: string;
    address_line1: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    is_primary?: boolean;
    metadata?: Record<string, any>;
  }) {
    const { entity_id, addressable_type, ...addressData } = data;

    const entityField = `${addressable_type.toLowerCase()}_id`;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "create",
      {
        data: {
          ...addressData,
          addressable_type,
          [entityField]: entity_id,
        },
      },
      {},
    );
  }
}
