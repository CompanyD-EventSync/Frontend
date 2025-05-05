import axios from "axios";

export default class ApiService {

    static BASE_URL = "http://localhost:3030/";

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }

    /** AUTHENTICATION & USER MANAGEMENT */
    static async registerUser(registration) {
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
        return response.data;
    }

    static async loginUser(loginDetails) {
        const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
        return response.data;
    }

    static async getLoggedInUserInfo() {
        const response = await axios.get(`${this.BASE_URL}/user/my-info`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    static isAdmin() {
        return localStorage.getItem('role') === 'ADMIN';
    }

    /** EVENT CREATION & MANAGEMENT */
    static async createEvent(formData) {
        const response = await axios.post(`${this.BASE_URL}/event/create`, formData, {
            headers: {
                ...this.getHeader(),
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    }

    static async updateEvent(eventId, formData) {
        const response = await axios.put(`${this.BASE_URL}/event/update/${eventId}`, formData, {
            headers: {
                ...this.getHeader(),
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    }

    static async getAllEvents() {
        const response = await axios.get(`${this.BASE_URL}/event/get-all`);
        return response.data;
    }

    static async getEventById(eventId) {
        const response = await axios.get(`${this.BASE_URL}/event/get-by-id/${eventId}`);
        return response.data;
    }

    static async searchEvents(searchValue) {
        const response = await axios.get(`${this.BASE_URL}/event/search`, {
            params: { searchValue }
        });
        return response.data;
    }

    static async deleteEvent(eventId) {
        const response = await axios.delete(`${this.BASE_URL}/event/delete/${eventId}`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async checkVenueAvailability(venueId, date) {
        const response = await axios.get(`${this.BASE_URL}/event/check-availability`, {
            params: { venueId, date }
        });
        return response.data;
    }

    /** TICKET SALES MODULE */
    static async createTicket(eventId, ticketData) {
        const response = await axios.post(`${this.BASE_URL}/ticket/create/${eventId}`, ticketData, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getTicketsForEvent(eventId) {
        const response = await axios.get(`${this.BASE_URL}/ticket/list/${eventId}`);
        return response.data;
    }

    static async purchaseTicket(ticketId) {
        const response = await axios.post(`${this.BASE_URL}/ticket/purchase/${ticketId}`, {}, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /** REGISTRATION MODULE */
    static async registerForEvent(eventId, registrationData) {
        const response = await axios.post(`${this.BASE_URL}/registration/${eventId}`, registrationData, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getUserRegistrations() {
        const response = await axios.get(`${this.BASE_URL}/registration/my-events`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async cancelRegistration(eventId) {
        const response = await axios.delete(`${this.BASE_URL}/registration/cancel/${eventId}`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /** FEEDBACK & DISCUSSION MODULE */
    static async submitFeedback(eventId, feedbackData) {
        const response = await axios.post(`${this.BASE_URL}/feedback/${eventId}`, feedbackData, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getFeedback(eventId) {
        const response = await axios.get(`${this.BASE_URL}/feedback/${eventId}`);
        return response.data;
    }

    static async addDiscussionComment(eventId, commentBody) {
        const response = await axios.post(`${this.BASE_URL}/forum/${eventId}`, commentBody, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getDiscussionThread(eventId) {
        const response = await axios.get(`${this.BASE_URL}/forum/${eventId}`);
        return response.data;
    }

    /** REPORTING & ANALYTICS MODULE */
    static async getRegistrationReport() {
        const response = await axios.get(`${this.BASE_URL}/report/registrations`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getTicketSalesReport() {
        const response = await axios.get(`${this.BASE_URL}/report/ticket-sales`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getEventAnalytics(eventId) {
        const response = await axios.get(`${this.BASE_URL}/report/event-analytics/${eventId}`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /** OPTIONAL: ADDRESS MODULE (if needed) */
    static async saveAddress(body) {
        const response = await axios.post(`${this.BASE_URL}/address/save`, body, {
            headers: this.getHeader()
        });
        return response.data;
    }
}
