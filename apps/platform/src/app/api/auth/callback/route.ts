import { handleTeamCallback } from '@v1/auth'

/**
 * Handles the authentication callback for team-based authentication.
 *
 * This module exports the `handleTeamCallback` function as the GET handler
 * for the `/api/auth/callback` route in a Next.js application.
 *
 * @function GET
 * @async
 * @param {NextApiRequest} req - The incoming HTTP request object.
 * @param {NextApiResponse} res - The HTTP response object.
 * @returns {Promise<void>} A promise that resolves when the callback is handled.
 *
 * @description
 * The `handleTeamCallback` function is responsible for processing the
 * authentication callback after a user has attempted to authenticate with
 * their team credentials. It typically performs the following tasks:
 *
 * 1. Validates the incoming request and extracts necessary parameters.
 * 2. Verifies the authentication state and tokens.
 * 3. Creates or updates user and team information in the database.
 * 4. Sets appropriate cookies or headers for maintaining the session.
 * 5. Redirects the user to the appropriate page based on the authentication result.
 *
 * @example
 * // This function is automatically called by Next.js when a GET request
 * // is made to /api/auth/callback
 * // The implementation details are handled in the @v1/auth package
 *
 * @see {@link https://nextjs.org/docs/api-routes/introduction} for more information on Next.js API routes.
 * @see The `@v1/auth` package documentation for details on the `handleTeamCallback` implementation.
 */
export { handleTeamCallback as GET }
