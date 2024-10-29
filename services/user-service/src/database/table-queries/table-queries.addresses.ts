import { PrismaClient, Prisma } from "../generated/postgresql";
import { QueryMiddleware } from "../client";
import { QueryMiddlewareFactory } from "../client";
import { QueryOptions, RequestContext } from "../types";

type AddressType = "billing" | "shipping" | "office";
type AddressableType = "user" | "business" | "team";

type AddressWithRelations = Prisma.addressesGetPayload<{
  include: {
    user_account: true;
    business_account: true;
    team: true;
  };
}>;

export class AddressQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new address
   */
  async createAddress(data: {
    addressable_type: AddressableType;
    user_account_id?: bigint;
    business_account_id?: bigint;
    team_id?: bigint;
    address_line1: string;
    address_line2?: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    latitude?: Prisma.Decimal;
    longitude?: Prisma.Decimal;
    is_primary?: boolean;
    address_type: AddressType;
    metadata?: Record<string, any>;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "create",
      {
        data: {
          ...data,
          is_primary: data.is_primary ?? false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        include: {
          user_account: true,
          business_account: true,
          team: true,
        },
      },
    );
  }

  /**
   * Bulk create addresses
   */
  async bulkCreateAddresses(
    addresses: Array<{
      addressable_type: AddressableType;
      user_account_id?: bigint;
      business_account_id?: bigint;
      team_id?: bigint;
      address_line1: string;
      address_line2?: string;
      city: string;
      state: string;
      country: string;
      postal_code: string;
      latitude?: Prisma.Decimal;
      longitude?: Prisma.Decimal;
      is_primary?: boolean;
      address_type: AddressType;
      metadata?: Record<string, any>;
    }>,
  ) {
    const results = await this.prisma.$transaction(async (tx) => {
      const createdAddresses = [];
      for (const address of addresses) {
        try {
          const created = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.addresses,
            "create",
            {
              data: {
                ...address,
                is_primary: address.is_primary ?? false,
                created_at: new Date(),
                updated_at: new Date(),
              },
            },
          );
          createdAddresses.push({ success: true, address: created });
        } catch (error) {
          createdAddresses.push({
            success: false,
            error: error instanceof Error ? error.message : String(error),
            address,
          });
        }
      }
      return createdAddresses;
    });

    return results;
  }

  /**
   * Get addresses with flexible filtering
   */
  async getAddresses(
    options?: QueryOptions & {
      addressable_type?: AddressableType;
      address_type?: AddressType;
      country?: string;
      postal_code?: string;
      city?: string;
      is_primary?: boolean;
      includeRelations?: boolean;
    },
  ) {
    const {
      addressable_type,
      address_type,
      country,
      postal_code,
      city,
      is_primary,
      includeRelations,
      ...queryOptions
    } = options || {};

    const whereClause: Prisma.addressesWhereInput = {};

    if (addressable_type) whereClause.addressable_type = addressable_type;
    if (address_type) whereClause.address_type = address_type;
    if (country) whereClause.country = country;
    if (postal_code) whereClause.postal_code = postal_code;
    if (city) whereClause.city = city;
    if (typeof is_primary === "boolean") whereClause.is_primary = is_primary;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "findMany",
      {
        where: whereClause,
        include: includeRelations
          ? {
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Get an address by ID
   */
  async getAddressById(
    id: bigint,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<AddressWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "findUnique",
      {
        where: { id },
        include: includeRelations
          ? {
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Update an address
   */
  async updateAddress(
    id: bigint,
    data: {
      address_line1?: string;
      address_line2?: string;
      city?: string;
      state?: string;
      country?: string;
      postal_code?: string;
      latitude?: Prisma.Decimal;
      longitude?: Prisma.Decimal;
      is_primary?: boolean;
      address_type?: AddressType;
      metadata?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "update",
      {
        where: { id },
        data: {
          ...data,
          updated_at: new Date(),
        },
        include: {
          user_account: true,
          business_account: true,
          team: true,
        },
      },
    );
  }

  /**
   * Delete an address
   */
  async deleteAddress(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "delete",
      {
        where: { id },
      },
    );
  }

  /**
   * Bulk update addresses
   */
  async bulkUpdateAddresses(
    ids: bigint[],
    data: {
      is_primary?: boolean;
      address_type?: AddressType;
      metadata?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "updateMany",
      {
        where: { id: { in: ids } },
        data: {
          ...data,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Bulk delete addresses
   */
  async bulkDeleteAddresses(ids: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "deleteMany",
      {
        where: { id: { in: ids } },
      },
    );
  }

  /**
   * Get primary address for a specific entity
   */
  async getPrimaryAddressForEntity(
    addressable_type: AddressableType,
    entityId: bigint,
  ): Promise<AddressWithRelations | null> {
    const whereClause: Prisma.addressesWhereInput = {
      addressable_type,
      is_primary: true,
    };

    if (addressable_type === "user") {
      whereClause.user_account_id = entityId;
    } else if (addressable_type === "business") {
      whereClause.business_account_id = entityId;
    } else if (addressable_type === "team") {
      whereClause.team_id = entityId;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "findFirst",
      {
        where: whereClause,
        include: {
          user_account: true,
          business_account: true,
          team: true,
        },
      },
    );
  }

  /**
   * Update address to be primary
   */
  async setPrimaryAddress(
    id: bigint,
    addressable_type: AddressableType,
    entityId: bigint,
  ) {
    // Set all other addresses as non-primary for the entity
    await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "updateMany",
      {
        where: {
          addressable_type,
          is_primary: true,
          ...(addressable_type === "user" ? { user_account_id: entityId } : {}),
          ...(addressable_type === "business"
            ? { business_account_id: entityId }
            : {}),
          ...(addressable_type === "team" ? { team_id: entityId } : {}),
        },
        data: { is_primary: false },
      },
    );

    // Set the specified address as primary
    return await this.updateAddress(id, { is_primary: true });
  }

  /**
   * Fetch addresses by postal code
   */
  async getAddressesByPostalCode(postal_code: string, country?: string) {
    const whereClause: Prisma.addressesWhereInput = {
      postal_code,
      ...(country ? { country } : {}),
    };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "findMany",
      {
        where: whereClause,
        include: {
          user_account: true,
          business_account: true,
          team: true,
        },
      },
    );
  }
}
