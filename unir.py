import os
from PyPDF2 import PdfMerger

print('Get current working directory : ', os.getcwd())
pathFile = os.getcwd() + '' + '/files-pdf'
# pathFile = os.getcwd() 
print(pathFile)

pdfs = [archivo for archivo in os.listdir(pathFile) if archivo.endswith(".pdf")]
print(pdfs)

fusionador = PdfMerger()

for pdf in pdfs:
    print(pdf)
    fusionador.append(open(pathFile+'/'+pdf, 'rb'))

with open("./files-pdf/unidos-total.pdf", 'wb') as salida:
    fusionador.write(salida)

fusionador.close()

print("PDF MERGED CREATED")
