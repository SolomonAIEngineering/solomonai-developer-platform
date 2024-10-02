"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAppointments = exports.generateResources = void 0;
const faker_1 = require("@faker-js/faker");
const date_fns_1 = require("date-fns");
// Generate a specified number of resources
const generateResources = (num) => {
    let type;
    (function (type) {
        type["room"] = "room";
        type["person"] = "person";
        type["equipment"] = "equipment";
        type["service"] = "service";
        type["other"] = "other";
    })(type || (type = {}));
    return Array.from({ length: num }, () => {
        return {
            id: faker_1.faker.string.uuid(),
            name: faker_1.faker.internet.displayName(),
            type: type.person,
            details: {
                description: faker_1.faker.lorem.sentence(),
                image: faker_1.faker.image.avatarGitHub(),
            },
        };
    });
};
exports.generateResources = generateResources;
/**
 * Generates a list of fake appointments with ensured start before end dates.
 *
 * @param num - Number of appointments to generate
 * @param resources - Array of resources each appointment can be associated with
 * @returns Array of Appointment objects
 */
const generateAppointments = (num, resources) => {
    return Array.from({ length: num }, (_, i) => {
        const resource = faker_1.faker.helpers.arrayElement(resources); // Randomly pick one resource
        const start = faker_1.faker.date.soon({
            days: faker_1.faker.number.int({ min: 1, max: 14 }),
            refDate: new Date(),
        }); // Start date within the next two weeks
        let end = new Date(start.getTime()); // Ensure end is at least the same as start
        // Randomly decide to add between 1 hour to 48 hours to the start time for the end time
        const hoursToAdd = faker_1.faker.number.int({ min: 1, max: 48 });
        end = (0, date_fns_1.addHours)(end, hoursToAdd);
        // Ensure the appointment does not accidentally exceed two weeks from now
        if ((0, date_fns_1.differenceInCalendarDays)(end, new Date()) > 14) {
            end = (0, date_fns_1.addDays)(new Date(), 14); // Cap at two weeks from today
        }
        return {
            id: faker_1.faker.string.uuid(),
            title: faker_1.faker.company.catchPhrase(),
            start: start,
            end: end,
            resourceId: resource.id,
            order: i,
            details: {
                notes: faker_1.faker.lorem.sentence(),
                service: faker_1.faker.commerce.department(),
                image: faker_1.faker.image.url(),
            },
        };
    });
};
exports.generateAppointments = generateAppointments;
