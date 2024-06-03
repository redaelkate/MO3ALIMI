# MO3ALIMI
![mo3alimi](https://github.com/redaelkate/MO3ALIMI/assets/146549050/1cc0ad8e-82ae-4a5e-83a8-cab6e5038274)
## Introduction
MO3ALIMI is a platform designed to help illiterate adults learn the basics of literacy. The platform focuses on alphabets, writing, reading, and basic numeracy. Users receive personalized quizzes that assist them in learning and practicing simultaneously.



## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [User Interface](#user-interface)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [DEMO](#DEMO)

## Features
- **Phonics Practice**: Users can learn and practice phonics through interactive lessons.
- **Writing Practice**: Guided writing exercises to improve writing skills. We created an interface to teach users how to write Arabic letters. We trained a Convolutional Neural Network (CNN) for this, but it was not efficient in real-life applications due to challenges with varying angles and non-centered Arabic letters.
- **Basic Numeracy**: Lessons and quizzes on basic numeracy skills.
- **Personalized Quizzes**: Tailored quizzes to reinforce learning and practice.
- **Visual Learning**: Images generated to support visual learning.

## Technologies Used
- **Gemini API**: Used to generate lessons dynamically.
- **OpenAI**: Facilitates user interactions.
- **Tensorflow**: Training neural networks to recognize handwritten digits.
- **Dall-E 3**: Generates images to support visual learning.
- **CSS HTML CSS FLASK**: HTML structures the content, CSS styles it, JavaScript adds interactivity, and Flask manages server-side logic, all converging to support the AI-powered features in the app
## Installation
To install MO3ALIMI:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mo3alimi.git
    ```
2. Run app.py
   ```bash
    $ flask run
    ```
## Contributors:
- Salim EL MARDI
- Reda EL KATE
- Mouad EN-NASIRY

## Demo

https://github.com/redaelkate/MO3ALIMI/assets/146549050/303396e9-c94a-423d-b28f-97a8b341dd05


## pitch
[pitch.pdf](https://github.com/user-attachments/files/15540413/pitch.pdf)
## business canvas 
[Upload<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The Business Model Canvas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Headland+One|Roboto:300,400,500,700" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 1600px;
            margin: 40px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            font-family: 'Headland One', serif;
            font-size: 2.5em;
            text-align: center;
            color: #333;
        }
        table#bizcanvas {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table#bizcanvas td {
            vertical-align: top;
            padding: 15px;
            border: 1px solid #ddd;
            background-color: #fafafa;
            border-radius: 5px;
        }
        table#bizcanvas h4 {
            font-size: 1.2em;
            margin-bottom: 10px;
            color: #007BFF;
        }
        table#bizcanvas p {
            font-size: 1em;
            color: #555;
            margin-bottom: 10px;
        }
        table#bizcanvas td[colspan="5"] {
            background-color: #f1f1f1;
        }
        table#bizcanvas td[colspan="2"] {
            background-color: #f9f9f9;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            width: 150px;
        }
    </style>
  </head>
  <body>
    <div class="container" >
      <h1 style="margin: 0;">MO3ALIMI Business Model Canva</h1>
      <!-- Canvas -->
      <table id="bizcanvas" cellspacing="0">
        <!-- Upper part -->
        <tr>
          <td colspan="2" rowspan="2">
            <h4>Key Partners</h4>
            <p>• Government literacy programs</p>
            <p>• Educational NGOs</p>
            <p>• Content creators for curriculum development</p>
            <p>• Technology Partners</p>
          </td>
          <td colspan="2">
            <h4>Key Activities</h4>
            <p>• Curriculum development</p>
            <p>• Technology Development</p>
            <p>• Marketing and outreach</p>
            <p>• Partnership Management</p>
            <p>• AI integration for personalized learning</p>
          </td>
          <td colspan="2" rowspan="2">
            <h4>Value Proposition</h4>
            <p>Empower illiterate Moroccans with personalized literacy education on numeracy, writing and reading. Our AI-driven platform offers interactive lessons, quizzes, and a dynamic writing canvas for hands-on practice, fostering lifelong learning</p>
          </td>
          <td colspan="2">
            <h4>Customer Relationships</h4>
            <p>• User Support</p>
            <p>• Feedback Loop</p>
            <p>• Incentives and Rewards</p>
          </td>
          <td colspan="2" rowspan="2">
            <h4>Customer Segments</h4>
            <p>• Illiterate Adults in Morocco</p>
            <p>• Educational Institutions and NGOs</p>
            <p>• Government Agencies</p>
            <p>• Family Members of Illiterate Adults</p>
          </td>
        </tr>

        <!-- Lower part -->
        <tr>
          <td colspan="2">
            <h4>Key Resources</h4>
            <p>• Technology</p>
            <p>• Content Development Team</p>
            <p>• Partnerships</p>
            <p>• Funding</p>
          </td>
          <td colspan="2">
            <h4>Channels</h4>
            <p>• Online Platform</p>
            <p>• Mobile App</p>
            <p>• Partnerships with Local Organizations</p>
            <p>• Community Outreach Programs</p>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <h4>Cost Structure</h4>
            <p>• Development and maintenance of the platform</p>
            <p>• Content Production and curation</p>
            <p>• Marketing and Outreach</p>
            <p>• Operational Costs</p>
            <p>• Partnerships and Collaborations</p>
          </td>
          <td colspan="5">
            <h4>Revenue Streams</h4>
            <p>• Subscription model for premium features</p>
            <p>• Grants and Funding</p>
            <p>• Partnerships and Sponsorships</p>
            <p>• Advertising</p>
          </td>
        </tr>
      </table>
      <!-- /Canvas -->
    </div>
  </body>
</html>
ing canva.html…]()

<br>
Another version featuring other technologies is available on this [repository](https://github.com/mouadenna/MO3ALIMI).
<br>

