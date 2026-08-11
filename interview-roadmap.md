# 45-Day Interview Prep — AI Role Transition

**Time commitment:** 75 min/day, every day.
**Background:** CS degree, DSA in school but rusty, strong infra/platform, some AI project experience (trading bots, Claude API tooling).
**Target:** AI Engineer / ML Infrastructure / Applied AI at startups, AI labs, big tech.

---

## How the 75 Minutes Split

| Phase | Days | DSA | System Design | AI Track |
|-------|------|-----|---------------|----------|
| 1 — Foundations | 1–15 | 45 min | 15 min reading | 15 min reading |
| 2 — Depth | 16–30 | 30 min | 20 min | 25 min projects |
| 3 — Mocks & Portfolio | 31–45 | 20 min | 25 min | 30 min projects |

---

## What AI Roles Actually Test

Before you study, know what you're walking into:

- **AI Engineer (startups/labs):** LC medium coding, ML system design, "build a RAG pipeline on a whiteboard," AI fundamentals (transformers, embeddings, fine-tuning), take-home projects
- **ML Infra (big tech):** LC medium-hard coding, distributed systems design, ML-specific infra (training pipelines, model serving, feature stores), Python proficiency
- **Applied AI (big tech):** LC medium coding, ML system design, probability/stats basics, "how would you evaluate this model," behavioral

Your infra background is a huge asset for ML Infra roles. The gap is DSA rust and demonstrable AI project work.

---

## PHASE 1: Foundations (Days 1–15)

### DSA — 45 min/day

You know this stuff, it's just buried. The goal is pattern recognition, not memorization.

**Platform:** LeetCode. Do every problem in Python. Timer on — 25 min max per problem, then read the solution. No shame in that, you're rebuilding muscle memory.

**Day 1–3: Arrays & Hashing (6 problems)**
- [ ] Two Sum
- [ ] Valid Anagram
- [ ] Group Anagrams
- [ ] Top K Frequent Elements
- [ ] Product of Array Except Self
- [ ] Encode and Decode Strings

**Day 4–5: Two Pointers + Sliding Window (5 problems)**
- [ ] Valid Palindrome
- [ ] 3Sum
- [ ] Container With Most Water
- [ ] Best Time to Buy and Sell Stock
- [ ] Longest Substring Without Repeating Characters

**Day 6–7: Stacks (4 problems)**
- [ ] Valid Parentheses
- [ ] Min Stack
- [ ] Evaluate Reverse Polish Notation
- [ ] Daily Temperatures

**Day 8–10: Linked Lists (6 problems)**
- [ ] Reverse Linked List
- [ ] Merge Two Sorted Lists
- [ ] Linked List Cycle
- [ ] Remove Nth Node From End
- [ ] Reorder List
- [ ] LRU Cache (this one is important — comes up a lot)

**Day 11–12: Binary Search (4 problems)**
- [ ] Binary Search
- [ ] Search in Rotated Sorted Array
- [ ] Find Minimum in Rotated Sorted Array
- [ ] Koko Eating Bananas

**Day 13–15: Trees (6 problems)**
- [ ] Invert Binary Tree
- [ ] Maximum Depth of Binary Tree
- [ ] Same Tree
- [ ] Subtree of Another Tree
- [ ] Lowest Common Ancestor of BST
- [ ] Binary Tree Level Order Traversal

**Total: 31 problems in 15 days. ~2/day.**

If you finish a day's problems early, re-solve yesterday's from memory. Repetition > volume.

### System Design — 15 min/day (reading only)

Just read. Don't practice yet. Build vocabulary.

- [ ] Days 1–5: Read "Designing Data-Intensive Applications" chapters 1–3 (skim — 15 min chunks)
- [ ] Days 6–10: Read Alex Xu "System Design Interview Vol 1" chapters 1–4 (framework, back-of-envelope, rate limiter, URL shortener)
- [ ] Days 11–15: Read Alex Xu "System Design Interview Vol 2" chapters on proximity service + Google Maps (geo-spatial comes up in ML system design)

Don't have the books? These free alternatives cover the same ground:
- github.com/donnemartin/system-design-primer (skim the overview sections)
- ByteByteGo YouTube channel — watch 1 video/day at 1.5x speed

### AI Track — 15 min/day (reading only)

Build the mental model before you build projects.

- [ ] Days 1–3: Read "Attention Is All You Need" paper. Yes, the whole thing. 15 min/day for 3 days. Understand Q/K/V, multi-head attention, positional encoding.
- [ ] Days 4–6: Read Anthropic's "Building effective agents" guide (https://docs.anthropic.com/en/docs/build-with-claude/agentic-systems). You already use Claude API — now understand the patterns formally.
- [ ] Days 7–9: Read about RAG architecture. Pinecone's RAG guide is solid and practical. Understand: chunking strategies, embedding models, vector DBs, retrieval + generation pipeline.
- [ ] Days 10–12: Read about fine-tuning. Hugging Face docs on LoRA/QLoRA. Understand when to fine-tune vs. prompt engineer vs. RAG.
- [ ] Days 13–15: Read about evaluation. MMLU, HELM, vibe evals, human preference. Understand how people measure whether an AI system is actually working.

---

## PHASE 2: Depth (Days 16–30)

### DSA — 30 min/day

Problems get harder. Patterns get more complex. Still 25 min max per problem.

**Day 16–17: Heap / Priority Queue (4 problems)**
- [ ] Kth Largest Element in a Stream
- [ ] Last Stone Weight
- [ ] K Closest Points to Origin
- [ ] Find Median from Data Stream

**Day 18–19: Backtracking (4 problems)**
- [ ] Subsets
- [ ] Combination Sum
- [ ] Permutations
- [ ] Word Search

**Day 20–22: Graphs — BFS/DFS (6 problems)**
- [ ] Number of Islands
- [ ] Clone Graph
- [ ] Pacific Atlantic Water Flow
- [ ] Course Schedule
- [ ] Course Schedule II
- [ ] Graph Valid Tree

**Day 23–24: Dynamic Programming — 1D (4 problems)**
- [ ] Climbing Stairs
- [ ] House Robber
- [ ] Coin Change
- [ ] Longest Increasing Subsequence

**Day 25–27: Dynamic Programming — 2D (4 problems)**
- [ ] Unique Paths
- [ ] Longest Common Subsequence
- [ ] Edit Distance
- [ ] Word Break

**Day 28–30: Intervals + Greedy (4 problems)**
- [ ] Merge Intervals
- [ ] Non-overlapping Intervals
- [ ] Meeting Rooms
- [ ] Meeting Rooms II

**Total: 26 problems. Running total: 57.**

### System Design — 20 min/day

Now practice, out loud. Talk through designs alone or with a friend. 20 min = pick one, talk through it start to finish.

**General systems (do these first — they test fundamentals):**
- [ ] Day 16: Design a URL shortener
- [ ] Day 17: Design a rate limiter
- [ ] Day 18: Design a notification system
- [ ] Day 19: Design a chat system (WhatsApp)
- [ ] Day 20: Design a news feed (Twitter/X)

**ML-specific systems (this is what AI role interviews actually ask):**
- [ ] Day 21: Design a recommendation system (Netflix/YouTube)
- [ ] Day 22: Design a search ranking system
- [ ] Day 23: Design a content moderation pipeline (text + image)
- [ ] Day 24: Design a real-time fraud detection system
- [ ] Day 25: Design an ML feature store
- [ ] Day 26: Design a model training pipeline (distributed)
- [ ] Day 27: Design a model serving infrastructure (low latency, A/B testing)
- [ ] Day 28: Design a RAG system for enterprise documents
- [ ] Day 29: Design an AI agent orchestration system
- [ ] Day 30: Design a real-time embedding pipeline

For ML system design, use this framework every time:
1. **Clarify** — what metric are we optimizing? online/offline? latency budget?
2. **Data** — what data, how much, how is it collected, labeled?
3. **Model** — architecture choice, why, tradeoffs
4. **Training** — pipeline, distributed?, how often retrained
5. **Serving** — how is the model served, caching, fallbacks
6. **Evaluation** — offline metrics, online A/B, monitoring for drift
7. **Infrastructure** — Kubernetes (you know this cold), scaling, cost

Resource: "Designing Machine Learning Systems" by Chip Huyen — skim chapters 6–9.

### AI Track — 25 min/day (projects start)

**Project 1 (Days 16–22): Build a RAG system from scratch**

Not a tutorial. Actually build it.

- Use a real corpus (your housing policy reports, or SEC filings, or Kubernetes docs)
- Implement chunking yourself (try fixed-size, then semantic)
- Use an embedding model (OpenAI `text-embedding-3-small` or open-source `all-MiniLM-L6-v2`)
- Store in a vector DB (ChromaDB locally, or Pinecone free tier)
- Query with Claude API — pass retrieved chunks as context
- Add a simple evaluation: 20 questions with known answers, measure retrieval accuracy

This is the #1 most asked "build something" in AI interviews right now. You need to have done it, understand the tradeoffs, and be able to talk about what went wrong.

**Project 2 (Days 23–30): Build an AI agent with tool use**

You already have Claude API experience. Now formalize it.

- Build an agent that can: search the web, read files, write code, and execute it
- Implement a simple ReAct loop (Reason → Act → Observe → Repeat)
- Add memory (conversation history + summary compression)
- Give it a real task: "analyze this stock" or "audit this Kubernetes manifest"
- Log every step — interviewers will ask you to walk through agent traces

Bonus: connect it to your trading bot infrastructure. An AI agent that monitors your positions and explains why the HMM model shifted regimes.

---

## PHASE 3: Mocks & Portfolio (Days 31–45)

### DSA — 20 min/day

No new patterns. Just reps and hard problems.

**Days 31–37: Revisit problems you got wrong or slow on. Re-solve from scratch.**
- Go through your LeetCode history
- Anything that took >20 min or you looked at the solution — redo it
- Target: solve every previously-seen medium in <15 min

**Days 38–40: Hard problems (pick 3 from your weakest pattern)**
- [ ] Trapping Rain Water (two pointers / stack)
- [ ] Merge K Sorted Lists (heap)
- [ ] Alien Dictionary (graph + topological sort)
- [ ] Minimum Window Substring (sliding window)
- [ ] Word Ladder (BFS)
- [ ] Serialize and Deserialize Binary Tree (trees)

Pick your 3 weakest. Don't do all 6.

**Days 41–45: Timed mocks**
- Set a 45-min timer
- Pick 2 random mediums on LeetCode (use the "pick random" feature)
- Solve both. If you can consistently do 2 mediums in 45 min, you pass the coding screen

### System Design — 25 min/day

**Days 31–35: Mock interviews (solo or with a partner)**
- Pick one system per day from Phase 2 list
- Set a 25-min timer
- Talk out loud as if an interviewer is watching
- Record yourself on your phone if you want to review

**Days 36–40: Deep dives on your own systems**
- [ ] Day 36: "Design the infrastructure behind your trading bots" — you built this, now present it as a system design
- [ ] Day 37: "Design Tijara's screening engine at 100x scale"
- [ ] Day 38: "Design the observability platform you built at Apple" (sanitized, no NDA specifics)
- [ ] Day 39: "Design an AI-powered code review system" (you built the Claude PR validator)
- [ ] Day 40: Pick your weakest ML system design from Phase 2, redo it

**Days 41–45: Full mock interviews**
- Find a partner on Pramp (free), interviewing.io (paid), or ask a friend
- Do 1 full system design mock every other day (days 41, 43, 45)
- Get feedback. Adjust.

### AI Track — 30 min/day (portfolio projects)

**Project 3 (Days 31–37): Fine-tune a small model**

This demonstrates you understand the full ML lifecycle, not just API calls.

- Pick a small open model (Mistral 7B or Llama 3 8B via Hugging Face)
- Fine-tune with LoRA on a specific task (sentiment analysis on financial text fits your trading bot domain)
- Use Hugging Face `transformers` + `peft` + `datasets`
- Evaluate before/after fine-tuning with a held-out test set
- Document: what worked, what didn't, how you'd scale this

If you don't have GPU access: use Google Colab (free tier has T4), or Lambda Cloud ($0.50/hr for A10).

**Project 4 (Days 38–45): Ship something visible**

Pick ONE:

**Option A — AI Trading Dashboard (extends your existing work)**
- Build a web interface that shows your trading bot decisions with AI-generated explanations
- "The HMM detected a regime shift to high volatility at 2:14pm. Here's why, based on these 5 signals..."
- Deploy it somewhere accessible (Vercel, Railway)

**Option B — Open source an AI tool**
- Take your Claude PR validation tool, generalize it, open source it
- "AI-powered Kubernetes manifest reviewer" — there's real demand for this
- Write a README, add examples, push to GitHub public repo
- This becomes your most powerful interview talking point

**Option C — Write a technical blog post**
- "How I built two trading systems: math vs. AI" — comparing HMM approach vs. agent approach
- Post on your site (adilmodan.com) and cross-post to LinkedIn
- Interviewers Google you. This is what they find.

---

## Daily Schedule Template

```
┌─────────────────────────────────────────────┐
│  PHASE 1 (Days 1-15)                        │
│                                              │
│  0:00 – 0:45   DSA (2 problems)             │
│  0:45 – 1:00   System Design (reading)      │
│  1:00 – 1:15   AI Track (reading)           │
├─────────────────────────────────────────────┤
│  PHASE 2 (Days 16-30)                       │
│                                              │
│  0:00 – 0:30   DSA (1-2 problems)           │
│  0:30 – 0:50   System Design (practice)     │
│  0:50 – 1:15   AI Project (build)           │
├─────────────────────────────────────────────┤
│  PHASE 3 (Days 31-45)                       │
│                                              │
│  0:00 – 0:20   DSA (review/mock)            │
│  0:20 – 0:45   System Design (mock)         │
│  0:45 – 1:15   AI Project (build + ship)    │
└─────────────────────────────────────────────┘
```

---

## Resources (Only What You Need)

**DSA:**
- NeetCode.io — free, problems organized by pattern, video explanations
- LeetCode — do problems here, use NeetCode for which ones to pick

**System Design:**
- "System Design Interview" by Alex Xu, Vol 1 + 2
- "Designing Machine Learning Systems" by Chip Huyen (ML-specific)
- ByteByteGo YouTube (free, visual, 10 min per topic)

**AI Fundamentals:**
- "Attention Is All You Need" (original transformer paper)
- Anthropic docs — building agents, tool use, prompt engineering
- Hugging Face course (free) — transformers, fine-tuning, evaluation
- Andrej Karpathy's "Let's build GPT" YouTube video (2 hrs, worth every minute)

**Mock Interviews:**
- Pramp.com — free peer mock interviews
- interviewing.io — paid, real interviewers from big tech

---

## What You Already Have Going For You

Be honest about this in interviews. It's a strong hand:

1. **You run production Kubernetes at Apple scale.** Most AI engineers can't deploy their own models. You can run the entire stack.
2. **You already build with AI.** Trading bots (HMM + AI agents), Claude API tooling, Tijara. These aren't tutorials — they're real systems with real money.
3. **You founded a company.** This signals you can own problems end-to-end, not just complete tickets.
4. **You have the infra background that AI teams desperately need.** The bottleneck at most AI companies isn't model quality — it's serving, scaling, and reliability. That's literally your job.

The gap isn't your background. It's proving you can talk about AI systems formally (system design), solve coding problems under pressure (DSA), and point to AI-specific project work (portfolio). That's what these 45 days close.

---

## Tracking

Mark each checkbox as you go. If you fall behind, skip the easiest problems in a section and keep moving — momentum matters more than completeness.

Day 1 start date: _______________
Day 45 target:    _______________
