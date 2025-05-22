/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    async redirects() {
        return [
            {
                source: '/sponsor_email',
                destination: 'https://radial-woodpecker-bb5.notion.site/Dossier-TEDxLINTAC-Youth-1d5a179dcaaa80028978c29a680104f3?pvs=73',
                permanent: true,
            }
        ]
    },
    images: {
        unoptimized: true,
        path: '/',
    }
}

module.exports = nextConfig;
