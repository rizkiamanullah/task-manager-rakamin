For Testing on Postman
Import this line:

{
    "info": {
        "_postman_id": "3ea32971-c7b8-414e-afb0-efbd9111a7c5",
        "name": "Task Manager API",
        "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
        "_exporter_id": "31566585"
    },
    "item": [
        {
            "name": "Create Task",
            "request": {
                "method": "POST",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\"title\": \"Finish the project report\",\"description\": \"Complete the final report for the project by the end of the week.\",\"status\": \"pending\",\"due_date\": \"2024-09-05\",\"projectId\": 1}"
                },
                "url": "http://localhost:3000/api/tasks"
            },
            "response": []
        },
        {
            "name": "Get All Tasks",
            "request": {
                "method": "GET",
                "header": [],
                "url": "http://localhost:3000/api/tasks"
            },
            "response": []
        },
        {
            "name": "Get Task by ID",
            "request": {
                "method": "GET",
                "header": [],
                "url": "http://localhost:3000/api/tasks/1"
            },
            "response": []
        },
        {
            "name": "Update Task",
            "request": {
                "method": "PUT",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\"title\": \"Finish the project report\",\"description\": \"Complete and submit the final report for the project.\",\"status\": \"completed\",\"due_date\": \"2024-09-05\",\"projectId\": 1}"
                },
                "url": "http://localhost:3000/api/tasks/1"
            },
            "response": []
        },
        {
            "name": "Delete Task",
            "request": {
                "method": "DELETE",
                "header": [],
                "url": "http://localhost:3000/api/tasks/1"
            },
            "response": []
        },
        {
            "name": "Create Project",
            "request": {
                "method": "POST",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\"name\": \"Mobile App Development\",\"description\": \"Develop a mobile app for both iOS and Android platforms.\"}"
                },
                "url": "http://localhost:3000/api/projects"
            },
            "response": []
        },
        {
            "name": "Get All Projects",
            "request": {
                "method": "GET",
                "header": [],
                "url": "http://localhost:3000/api/projects"
            },
            "response": []
        },
        {
            "name": "Get Project by ID",
            "request": {
                "method": "GET",
                "header": [],
                "url": "http://localhost:3000/api/projects/1"
            },
            "response": []
        },
        {
            "name": "Update Project",
            "request": {
                "method": "PUT",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\"name\": \"Mobile App Development\",\"description\": \"Develop and launch a mobile app for both iOS and Android platforms.\"}"
                },
                "url": "http://localhost:3000/api/projects/1"
            },
            "response": []
        },
        {
            "name": "Delete Project",
            "request": {
                "method": "DELETE",
                "header": [],
                "url": "http://localhost:3000/api/projects/1"
            },
            "response": []
        }
    ]
}

