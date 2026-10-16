# Ramnarayan Reddy — Professional Portfolio

Personal portfolio for Ramnarayan Reddy, a privacy engineer and software engineer based in Atlanta, GA. The site presents professional experience, technical expertise, and two educational engineering projects.

Live content includes:

- Privacy engineering and consent-management experience
- Featured educational projects
- Technical expertise
- Resume download
- GitHub, LinkedIn, and email contact links

No backend, database, authentication, or environment variables are required.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Featured projects

Both projects are educational simulations.

### Privacy X-Ray

Interactive privacy engineering lab covering consent management, privacy models, and privacy-by-design concepts.

- Live: [privacy-xray.vercel.app](https://privacy-xray.vercel.app)
- GitHub: [ramreddys49/privacy-xray](https://github.com/ramreddys49/privacy-xray)

### Feed X-Ray

Interactive recommendation-system simulator covering behavioral signals, ranking explanations, and engineer mode.

- Live: [feed-xray.vercel.app](https://feed-xray.vercel.app)
- GitHub: [ramreddys49/feed-xray](https://github.com/ramreddys49/feed-xray)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The resume is served from `public/resume/ramnarayan-reddy.pdf`. Project screenshots live in `public/images/projects/`.

## Build

```bash
npm run lint
npm run build
npm run start
```

`npm run build` creates a production build. `npm run start` serves that build locally.

## Vercel deployment

This is a standard Next.js app. After the GitHub repository exists:

1. Import the repository in [Vercel](https://vercel.com/new).
2. Leave the framework preset as **Next.js**.
3. Do not add environment variables.
4. Use the default build command (`next build`) and output settings.
5. Deploy.

After the first deploy, later pushes to the production branch will update the site automatically.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
