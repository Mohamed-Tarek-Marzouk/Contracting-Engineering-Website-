# Tekam Contracting & Engineering

This is a modern, professional, and fully responsive website for **Tekam Contracting & Engineering**, a company specializing in construction, architectural design, and infrastructure projects. The website is built with a modern tech stack to ensure high performance, scalability, and an excellent user experience.

---

### ► [Live Demo](https://your-live-demo-link.com) 

*(Replace the link above with your deployed project URL)*

---

## Features

- **Dynamic Hero Section**: A multi-slide hero banner to showcase key messages and visuals.
- **About Us**: Company mission, vision, values, and team introduction.
- **Services**: A detailed presentation of the services offered.
- **Projects**: A filterable gallery of completed projects with detailed individual pages.
- **Team Showcase**: A dedicated section to introduce the core team members.
- **Testimonials**: Client feedback to build trust and credibility.
- **Contact Page**: An interactive contact form and an embedded Google Map for location.

## Contact Information

All contact and social media information is centralized in the `src/lib/data.ts` file for easy management.

- **Phone & WhatsApp**: `(+20) 01000196382`
- **Email**: `mohamedtarekmarzouk@gmail.com`
- **Location**: Egypt, New Valley, El Zhoor
- **Social Media**: 
  - [Facebook](#)
  - [Twitter](#)
  - [LinkedIn](#) 
  *(Update these placeholder links in `data.ts`)*

## Special UI Adjustments

- **Footer**: The email address in the footer has been enlarged for better visibility and consistency. The copyright notice has been updated to:
  > All rights reserved © Mohamed Marzouk (Tekam Contracting & Engineering)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide-react](https://lucide.dev/guide/packages/lucide-react)
- **Image Hosting**: [Postimg](https://postimg.cc/)

## Project Structure

The project follows a standard Next.js App Router structure. A key file to note is:

- **`src/lib/data.ts`**: This file acts as a centralized database for the website's static content. It holds all the data for services, projects, team members, testimonials, contact information, hero slides, etc. This makes it incredibly easy to update website content without touching the component files.

## Deployment

This project is ready for deployment on platforms like Vercel or Netlify.

1. **Push to GitHub**: Create a new repository on GitHub and push your project code.
2. **Connect to Vercel/Netlify**:
   - Sign up for a Vercel or Netlify account.
   - Connect your GitHub account.
   - Import the project repository.
3. **Configure Settings**: The default Next.js settings should work out of the box. The platform will automatically detect the framework and build commands.
4. **Environment Variables**: If you add any environment variables (e.g., for analytics or APIs), make sure to add them to your Vercel/Netlify project settings.
5. **Deploy**: Click the deploy button, and your website will be live in minutes!

## Notes

- **AI-Generated Images**: The project uses AI-generated images hosted on **Postimg** as placeholders. The `data-ai-hint` attribute is included in image tags to provide context for future image selection.
- **Hero Slides**: The hero section content is managed via the `heroSlides` array in `src/lib/data.ts`. You can easily add, remove, or modify slides by editing this array.
- **Map Integration**: The map on the contact page is an embedded Google Map. The location can be updated by changing the `src` URL of the `iframe` in `src/app/contact/page.tsx`.

---

## Author

This project was created by:

**Mohamed Marzouk**
- **Email**: `mohamedtarekmarzouk@gmail.com`
- **Phone**: `+20 01000196382`
