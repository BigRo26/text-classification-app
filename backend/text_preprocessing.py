import re
import string
import nltk
import numpy as np
from nltk.corpus import stopwords

nltk.download('stopwords', quiet=True)

# remove special characters from text
special_characters = ['\n', '\'', '.', '!', '?', ',', "'"]

def remove_special_chars(text, special_chars=special_characters):
    return "".join([char for char in text if char not in special_chars])

# remove stop words from text samples
STOP_WORDS = set(stopwords.words('english'))

def remove_stop_words(text, stop_words=STOP_WORDS):
    words = text.split()
    filtered_words = [word for word in words if word.lower() not in stop_words]
    return " ".join(filtered_words)

# extract length of text sample
def text_length(text):
    return len(text.split())

# compute ratio of unique words for each text sample
def unique_word_ratio(text):
    total_words = len(text.split())
    unique_words = len(set(text.split()))
    return round(unique_words/total_words, 2)

# compute average word length for each text sample
def avg_word_length(text):
    words = text.split()
    chars = [len(word) for word in words if len(word) > 0]
    return round(sum(chars)/len(words), 2)

# compute average sentence length for each text sample
def sentence_length_mean(text):
    sentences = re.split(r'(?<=[.!?])\s+', text.strip())
    
    total_words = 0
    for sentence in sentences:
        words = [word for word in sentence.strip().split() if word]
        total_words += len(words)
    
    if len(sentences) == 0:
        return 0
    return round(total_words / len(sentences))

# compute sentence length standard deviation of each text sample
def sentence_length_std(text):
    sentence_lengths = []
    sentences = re.split(r'(?<=[.!?])\s+', text.strip())
    for sentence in sentences:
        length = len(sentence.strip().split())
        sentence_lengths.append(length)
    return round(np.std(sentence_lengths), 2)