const repositories = require("./repositories.json");
const onboarding_config = require("./config-onboarding-mr.json");
const renovate_token = process.env.RENOVATE_TOKEN;

module.exports = {
  platform: "gitlab",
  endpoint: "https://<your GitLab instance URL>/api/v4/",
  onboarding: true,
  onboardingConfig: onboarding_config,
  repositories: repositories,
  token: renovate_token,
  hostRules: [
    {
      hostType: "docker",
      matchHost: process.env.CI_REGISTRY,
      username: process.env.CI_REGISTRY_USER,
      password: process.env.CI_REGISTRY_PASSWORD,
    }
  ],
};
