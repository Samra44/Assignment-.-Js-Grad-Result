# Get input from the user
score = float(input("Enter the student's score: "))

# Determine the grade based on the score
if score >= 90:
    grade = 'A'
el if score >= 80:
    grade = 'B'
el if score >= 70:
    grade = 'C'
el if score >= 60:
    grade = 'D'
else:
    grade = 'F'

# Print the result
print("The student's grade is:", grade)