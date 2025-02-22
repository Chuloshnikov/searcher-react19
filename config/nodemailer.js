import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD, MAILER_EMAIL } from './env.js';

export const accountEmail = MAILER_EMAIL;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD
    }
});

export default transporter;