from flask import Flask, send_from_directory,request, render_template, jsonify
import google.generativeai as genai
import json
import openai
import re

app = Flask(__name__, static_folder='static')
def generate_image(prompt):
    client = openai.OpenAI(api_key="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")

    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        quality="standard",
        n=1,
    )

    return response.data[0].url


genai.configure(api_key="AIzaSyD3iHjKAdmfMjXwfw8YBA_WAOxMgVzUgM4")
model1 = genai.GenerativeModel('gemini-1.5-flash-latest',system_instruction=["you are a tutor that teaches illiterate adults numeracy  and you only talk in  arabic (no images)   and in this format \"question?|choice3|choice1|choice2 \" "])
model2 = genai.GenerativeModel('gemini-1.5-flash-latest',system_instruction=["Design a numeracy course for illiterate adults, conducted solely in Arabic , give just the course with a simple way nohing else , give course by course and don't pass to the next course until i click next. Incorporate emojis to enhance understanding and engagement. Cover topics such as numbers, basic operations, fractions, decimals, percentages, geometry, and measurement."])
model3 = genai.GenerativeModel('gemini-1.5-flash-latest',system_instruction=["you are a tutor that teaches illiterate adults Phonics and you only talk in  arabic (no images)   and in this format \"question?|choice3|choice1|choice2 \" "])
model4 = genai.GenerativeModel('gemini-1.5-flash-latest', system_instruction=["Design a reading course for illiterate adults, conducted solely in Arabic. Give just the course in a simple way, nothing else. Give course by course and don't pass to the next course until I click 'Next'. Incorporate emojis to enhance understanding and engagement. Cover topics such as the alphabet, basic vocabulary, sentence structure, reading comprehension, and pronunciation."])

H1=[]

chat1 = model1.start_chat(history=H1)
H2=[]
chat2 = model2.start_chat(history=H2)
H3=[]
chat3 = model3.start_chat(history=H3)
H4=[]
chat4 = model4.start_chat(history=H4)



def strip_markdown(text):
    # Remove markdown links
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)
    # Remove markdown bold and italics
    text = re.sub(r'\*\*(.*?)\*\*', r'\1', text)
    text = re.sub(r'\*(.*?)\*', r'\1', text)
    text = re.sub(r'__(.*?)__', r'\1', text)
    text = re.sub(r'_(.*?)_', r'\1', text)
    # Remove markdown headers
    text = re.sub(r'#+\s(.*)', r'\1', text)
    return text

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/handwriting')
def handwriting():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/getReading")
def get_reading():
    userText = request.args.get('msg')
    response = chat4.send_message(userText)
    plain_text_response = strip_markdown(response.text)
    return plain_text_response

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    response = chat1.send_message(userText)
    return response.text.split("|")


@app.route("/getquiz")
def get_bot_reading():
    userText = request.args.get('msg')
    response = chat4.send_message(userText)
    return response.text.split("|")


@app.route("/getCourse")
def get_bot_course():
    userText = request.args.get('msg')
    response = chat2.send_message(userText)
    plain_text_response = strip_markdown(response.text)
    return plain_text_response


@app.route("/generate_image")
def generate_image_route():
    prompt = request.args.get('prompt')
    image_url = generate_image(prompt)
    return jsonify(image_url=image_url)



if __name__ == '__main__':
    app.run()
