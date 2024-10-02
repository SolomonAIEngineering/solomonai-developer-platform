"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
class AppointmentService {
    appointments;
    constructor(initialAppointments) {
        this.appointments = initialAppointments;
    }
    createAppointment(appointment) {
        debugger;
        this.appointments.push(appointment);
        return this.appointments;
    }
    updateAppointment(updatedAppointment) {
        const index = this.appointments.findIndex((a) => a.id === updatedAppointment.id);
        if (index !== -1) {
            this.appointments[index] = {
                ...this.appointments[index],
                ...updatedAppointment,
            };
        }
        return this.appointments;
    }
    deleteAppointment(id) {
        this.appointments = this.appointments.filter((a) => a.id !== id);
        return this.appointments;
    }
    getAppointments() {
        return [...this.appointments];
    }
}
exports.AppointmentService = AppointmentService;
