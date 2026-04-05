# @Get /profiles findAll()
# http GET http://localhost:3000/profiles

# @Get /profiles/:id findOne()
# http GET http://localhost:3000/profiles/80c2acb5-ac9d-4a0b-95af-26c5ec8e94a4

# @Post /profiles create()
http POST http://localhost:3000/profiles --raw '{"name": "Bruno", "description": "Node.js developer who thrives on async flows, event loops, and late-night debugging sessions. I start the day with strong coffee, skim changelogs, and have strong opinions about package bloat and clean APIs. Nothing beats shipping a fast server and watching logs stay quiet—care to build something scalable together?"}'

# @Put /profiles/:id update()
# http PUT http://localhost:3000/profiles/09263fdd-f702-4075-9df6-e4bf5642509e --raw '{"name": "Jessica", "description": "Java developer who loves robust architectures, elegant patterns, and code that stands the test of time. My mornings involve tea, JVM tuning reads, and a firm stance on readable, maintainable code over clever hacks. Give me a solid Spring setup and I’m happy—shall we engineer something resilient?"}'

# @Delete /profiles/:id remove()
# http DELETE http://localhost:3000/profiles/5d10c608-96d1-444d-b49a-5da162426bd4
