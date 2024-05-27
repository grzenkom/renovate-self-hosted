# Automating dependency updates with Renovate

This repository contains materials for the talk
[How to automate dependency updates with the Renovate bot](https://events.pinetool.ai/3152/#sessions/104769?referrer%5Bpathname%5D=%2Fsessions&referrer%5Bsearch%5D=&referrer%5Btitle%5D=Sessions)
presented at [DevOps Pro Europe 2024](https://devopspro.lt/):

- :clown_face: a dummy Python project with some outdated dependencies,
  to demonstrate how Renovate can update them
- :green_heart: a bare-bones configuration of a Renovate instance for GitLab
  - see also the official [Renovate Runner](https://gitlab.com/renovate-bot/renovate-runner)
    from Mend
- :art: the Vilnius slide deck

The `.gitlab-ci.yml` files contain definitions of GitLab CI pipelines.

## Acknowledgements

Kudos to [BrunnerLivio](https://github.com/BrunnerLivio) for starting
this project at Roche!
