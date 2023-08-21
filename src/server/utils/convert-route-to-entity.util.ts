const mapping: Record<string, string> = {
  administrators: 'administrator',
  'cron-jobs': 'cron_job',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
