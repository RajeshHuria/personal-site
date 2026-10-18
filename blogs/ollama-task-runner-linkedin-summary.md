---
title: Ollama Task Runner LinkedIn Summary
date: 2026-01-15
---

Made my local Ollama task runner much more natural to use.

## Natural Intent-Based Commands

Now I can type things like:

```
ollama run "run tests for auth"
ollama run "add a retry decorator to src/utils.py"
ollama run --dry-run "update src/api.py with a FastAPI endpoint"
```

Instead of rigid commands, it understands intent, routes safely, and lets me preview actions before anything risky runs.

## How It Works

The task runner takes your natural language description, interprets what you want to do, and safely executes it. The `--dry-run` flag lets you see exactly what will happen before committing to changes.

## Get Started

Check out the GitHub link below to try it yourself:

https://github.com/RajeshHuria/ollama-task-orchestrator

If you've been curious about using LLMs for vibe-coding projects, this is a nice way to experiment locally before committing to another subscription.
