# AnatomyHub

AnatomyHub is an Educational CMS I developed and specifically designed to make learning human anatomy engaging and effective for anatomy students in 
Universities or other higher learning institutions

# Getting Started

Installation: to run my app on your computer, please follow these steps;

1. After cloning my github repo, open the folders on Vscode
 - Make sure to have xampp installed on your pc
 - download the database file ```anatomy.sql``` 
 - run xampp and upload to phpmyadmin (make sure to keep xampp running)

2. Open your Vscode and cd into the client folder via terminal ```cd client``` and install dependencies using npm:
    ## Client

    ```bash 
    npm install
    ```
3. After all dependencies are installed start the application using 

    ```bash
    npm run dev
    ```
    ## Server

4. goto a new terminal and cd into the server folder ```cd server``` and install dependencies using npm:

    ```bash
    npm install
    ```

## Start The Application

     npm start


# Features
Comprehensive Course Materials: I've carefully curated study materials, detailed illustrations covering all major anatomical topics and subject areas.

## Interactive Quizzes: 
Test your knowledge with quizzes after each section. These features multiple-choice questions.

## Progress Tracking: 
The dashboard displays course progress and quiz scores, so users can easily stay on track.

## Detailed 3D Models: 
Explore rotatable, interactive 3D models of bones, organs, and entire systems to enhance your spatial understanding.

## Study and Course Materials: 
I have uploaded various course materials that covers all areas of human anatomy. These materials were gotten from the best anatomy teaching universities in the world.

# Project Idea (Problem being solved)
AnatomyHub aims to revolutionize anatomy education by directly addressing the shortcomings of traditional learning methods:

## Enhancing Engagement: 
AnatomyHub transforms the often dry and overwhelming experience of studying anatomy into an interactive and visually captivating journey. Engaging quizzes, 3D models, and an intuitive interface foster a deeper connection with the subject matter.

## Transforming Visualization: 
2D diagrams often fail to capture the intricate spatial relationships within the human body. AnatomyHub's interactive 3D models allow students to manipulate and explore anatomical structures from any angle, providing a more comprehensive understanding.

## Expanding Access: 
High-quality anatomical resources like atlases and specialized software are often financially inaccessible to many students. AnatomyHub democratizes this knowledge by offering a vast collection of university-level course materials and study aids completely free of charge.

## Monitoring Progress and Identifying Weaknesses: 
AnatomyHub's personalized dashboard empowers students to track their learning progress, review quiz scores, and pinpoint areas where they may need additional focus or practice.

## Enabling Personalized Learning: 
AnatomyHub recognizes that learning styles and paces vary. The platform allows students to learn at their own speed, revisit challenging concepts as needed, and explore topics that pique their individual interests.

By overcoming these common obstacles, AnatomyHub strives to equip anatomy students with the tools and resources they need to learn more effectively, efficiently, and enthusiastically.

## Using AnatomyHub
Navigating AnatomyHub is easy! (survey from over 100 testers)

Use the main menu to find courses, access your dashboard, or explore the 3D model library.
Within courses, use the side navigation to jump between lessons.
You may launch a quiz at the end of each study section.

# References

## Frontend Framework:

Material UI -   https://mui.com/material-ui/getting-started/templates/ 
                UI framework for React, providing pre-built components and styling tools.

CSS Grid    -   https://youtu.be/uuOXPWCh-6o?si=xdUOqML66H7MwV0T 


## Backend Libraries:

bcryptjs -      https://www.npmjs.com/package/bcryptjs
                library for securely hashing passwords in my Node.js applications.

axios -         https://www.axios.com/
                HTTP client for making API requests.

## Additional Services:

tidio -         tidio.com
                live chat and chatbot integration, enhancing customer communication on AnatomyHub.

A2 Hosting -    a2hosting.com 
                web hosting provider Hosting the livechat and the Web App Domain 
