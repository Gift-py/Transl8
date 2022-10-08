from flask import Flask, render_template, request
import cohere
import config

api_key = config.api_key
co = cohere.Client(api_key)

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/translate', methods=['POST', 'GET'])
def translate():
    if request.method == 'POST':
        form_data = request.form
        current_prompt = f'''
            Informal: {form_data['inputtext']}.
            Formal:
        '''
        para = generate_text(current_prompt)
        response = {'res': para, 'inp': form_data['inputtext']}
        return render_template('index.html', form_data = response)

def generate_text(current_prompt):
    file = open('data.txt', 'r')
    lines = file.readlines()
    base_prompt = '''This is a program that will convert an informal text to a formal text. \n'''
    for line in lines[240:]:
        base_prompt = base_prompt + "{}".format(line.strip())+'\n'
    response = co.generate(
        model = 'xlarge',
        prompt=base_prompt + '\n' + current_prompt,
        max_tokens=50,
        temperature = 0.4,
        stop_sequences=['---']
    )
    generation = response.generations[0].text
    return generation

if __name__ == '__main__':
    app.run(debug=True)