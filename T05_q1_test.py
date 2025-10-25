#  Purpose: Test the /hello endpoint from L09_3.py
# ============================================
# Import TestClient — "simulate" HTTP requests to FastAPI app
from fastapi.testclient import TestClient
# Import SQLModel can create tables for testing database
from sqlmodel import SQLModel

# engine = create_engine(f"sqlite:///L09_3.db", echo=False)
# app = FastAPI(lifespan=lifespan)
from L09_3 import app, engine 

# --------------------------------------------
# Create a test client to mimic a web browser or API caller
# This allows us to send requests to routes such as /hello
# --------------------------------------------
client = TestClient(app)

#Ensure tables exist before running tests
# This prevents the "no such table: name" error from SQLite
# SQLModel.metadata.create_all() creates all tables defined in the models
# --------------------------------------------
SQLModel.metadata.create_all(engine)

# ============================================
# Test 1: test_hello_with_name
# Goal: Verify that /hello?name=Eric and /hello?name=ErIC both return
#       a valid greeting JSON with status 200.
# ============================================
def test_hello_with_name():
     # Send GET request with query parameter name = Sally/SaLLY
    response1 = client.get("/hello?name=Sally")
    response2 = client.get("/hello?name=SaLLY")
     # Check both requests are successful (HTTP 200 OK)
    assert response1.status_code == 200
    assert response2.status_code == 200
    
    # Verify that both JSON responses have the same message
    # (since the API uppercases name internally, both become "WORLD")
    assert response1.json()["message"] == "Hello, SALLY!"
    assert response2.json()["message"] == "Hello, SALLY!"


#Test: equivalent names to default parameter
def test_hello_mixed():
    # Call /hello without query parameter (uses default name = "World")
    resonse_default = client.get("/hello")
    # Call /hello with equivalent name in mixed case
    response_param = client.get("/hello?name=WoRLD")
    
    assert resonse_default.status_code == 200
    assert response_param.status_code == 200

    # Verify that both JSON responses have the same message
    # (since the API uppercases name internally, both become "WORLD")    
    assert resonse_default.json()["message"] == response_param.json()['message']
    