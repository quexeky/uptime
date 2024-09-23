const pageConfig = {
  // Title for your status page
  title: "quexeky's statuses",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/quexeky', label: 'GitHub' },
    { link: 'https://deepcore.dev/', label: 'Deepcore' },
    { link: 'https://lab.deepcore.dev', label: 'Deepcore Lab' },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'deepcore',
      name: 'Deepcore Website',
      method: 'GET',
      target: 'https://deepcore.dev',
      timeout: 10000,
    },
    {
      id: 'lab',
      name: 'Deepcore Lab',
      method: 'GET',
      target: 'https://lab.deepcore.dev',
      timeout: 10000,
    },
    {
      id: "sentralise",
      name: "Sentralise",
      method: "GET",
      target: "https://sentralise.deepcore.dev",
      timeout: 10000,
    },
    {
      id: 'quexeky-salty',
      name: 'Salty',
      method: 'GET',
      target: 'https://salt.quexeky.dev',
      timeout: 10000,
    },
    {
      id: 'photos',
      name: 'Photoprism',
      method: 'GET',
      target: 'https://photos.quexeky.dev',
      timeout: 10000,
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
