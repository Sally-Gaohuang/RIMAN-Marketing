from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Request, Query
from typing import Annotated

app = FastAPI()

hello_db = {}

@app.get("/hello")
def hello(name: str = "World") -> dict:
    name = name.upper()
    if name in hello_db:
        hello_db[name] += 1
    else:
        hello_db[name] = 1
    return {"message": f"Hello, {name}!", "count": hello_db[name]}

app.mount("/static", StaticFiles(directory="static", html=True), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/hello.html", response_class=HTMLResponse)
async def hello(request: Request, name: str = "World"):
    return templates.TemplateResponse(
        request=request, name="hello.html", context={"name": name}
    )

@app.get("/hello_cond.html", response_class=HTMLResponse)
async def hello(request: Request, name: str = None):
    return templates.TemplateResponse(
        request=request, name="hello_cond.html", context={"name": name}
    )

# See https://fastapi.tiangolo.com/tutorial/query-params-str-validations/#query-parameter-list-multiple-values
@app.get("/hello_for.html", response_class=HTMLResponse)
async def hello(request: Request, names: Annotated[list[str] | None, Query()] = []):
    return templates.TemplateResponse(
        request=request, name="hello_for.html", context={"names": names}
    )
