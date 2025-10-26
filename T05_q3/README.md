# T05_q3 – CSR vs SSR Integration

## How to run
1. Open terminal inside `app` folder
2. Run:
   ```bash
   uvicorn main:app --reload

---

3. ▶️ Run Flow

### 1️⃣ Activate virtual environment (if applicable)
```bash
source ~/.venv/bin/activate
```
cd T05_q3/app
uvicorn main:app --reload

4. Notes
CSR: Browser loads static HTML → JS fetch('/hello') updates DOM dynamically.

SSR: Server pre-renders the page with variables → faster first load & SEO-friendly.

Integration: Both share a single hello_db dictionary in FastAPI (main.py).