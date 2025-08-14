# Text Classification App

A React-based application for authenticating and classifying text as either AI-generated or human-written.

## Textual Analysis

A Flask backend is used to extract simple features from the submitted text (avg word length, avg sentence length, unique word ratio, etc.). These features are then used as inputs to a Random Forest classifier trained across >500,000 text samples to differentiate between AI and Human generated text. 

## Text Input Screen

<img width="1873" height="931" alt="Screenshot 2025-08-08 095615" src="https://github.com/user-attachments/assets/2783fa7a-4567-4bf4-9e1b-5858b959a36a" />

## Analysis Screen

<img width="1842" height="934" alt="Screenshot 2025-08-08 095631" src="https://github.com/user-attachments/assets/ee248efa-07d4-400d-bbd3-b8fd6bb0481e" />


