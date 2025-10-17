'''
en la terminal usamos control+ñ
comandos git 
git config --global user.name "omarjoa88"
git config --global user.email "omarjoa@gmail.com"

# 1. Abres la carpeta de tu sitio (por ejemplo: portafolio)
cd C:\Users\Omar\Documents\portafolio

# 2. Inicializas Git
git init     
git remote add origin https://github.com/omarjoa88/Educacion-y-Analisis.git
git branch -M main
git remote -v

# cargar 
git add .    
git commit -m "Subo mi proyecto local a GitHub"
git push -u origin main
siempre que suba tengo que poner 
git pull origin main --rebase
para actualizar los archivos 
git push -u origin main
'''