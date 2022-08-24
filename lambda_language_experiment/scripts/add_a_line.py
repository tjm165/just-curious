import sys


string_to_add = '"Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy", "Tommy",\n'
lines_to_add = int(sys.argv[1])


#############
for _ in range(lines_to_add):
    path_to_file = "./infa/src/project/lambda1/python/lambda.py"
    with open(path_to_file, "r") as f:
        contents = f.readlines()
    contents.insert(17, string_to_add)
    with open(path_to_file, "w") as f:
        contents = "".join(contents)
        f.write(contents)

#############
for _ in range(lines_to_add):
    path_to_file = "./infa/src/project/lambda2/python/lambda.py"
    with open(path_to_file, "r") as f:
        contents = f.readlines()
    contents.insert(12, string_to_add)
    with open(path_to_file, "w") as f:
        contents = "".join(contents)
        f.write(contents)


#############
for _ in range(lines_to_add):
    path_to_file = "./infa/src/project/lambda2/go/main.go"
    with open(path_to_file, "r") as f:
        contents = f.readlines()
    contents.insert(27, string_to_add)
    with open(path_to_file, "w") as f:
        contents = "".join(contents)
        f.write(contents)