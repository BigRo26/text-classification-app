import joblib
import numpy as np
import sklearn
from flask import jsonify
from text_preprocessing import remove_stop_words, text_length, unique_word_ratio, avg_word_length, sentence_length_mean, sentence_length_std
from sklearn.ensemble import RandomForestClassifier

filename = "classifier.joblib"

try:
    model = joblib.load(filename)
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model {e}")

# method for processing real-world input text
def process_text(text):
    text = remove_stop_words(text)
    length = text_length(text)
    word_ratio = unique_word_ratio(text)
    mean_word_length = avg_word_length(text)
    avg_sentence_length = sentence_length_mean(text)
    std_sentence_length = sentence_length_std(text)
    return np.array(
        [length, word_ratio, mean_word_length, avg_sentence_length, std_sentence_length]
    ).reshape(-1, 5)

def predict(text):
    inputs = process_text(text)
    probs = model.predict_proba(inputs)
    result = [probs[0][0], probs[0][1]]
    return result
