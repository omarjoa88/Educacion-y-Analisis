import plotly.express as px
import pandas as pd
import glob
import os
#creación de estapcio de trabajo
ruta = 'C:/Users/omarj/OneDrive/Documentos/Ucatolica/proyecto/data/'
ruta2 = 'C:/Users/omarj/OneDrive/Documentos/Ucatolica/proyecto/'
archivos = glob.glob(os.path.join(ruta, '*.xlsx'))
print(f'Se encontro {len(archivos)} archivos Excel')

dataframe =[]

for archivo in archivos:
    print(f'leyendo: {os.path.basename(archivo)}')
    df = pd.read_excel(archivo)
    dataframe.append(df)

df_unificado = pd.concat(dataframe, ignore_index=True, join='outer')

salida = os.path.join(ruta2, 'Agregados-Unificados.csv')
df_unificado.to_csv(salida, index=False, encoding='utf-8')
print(f'✅ Archivos Unificado en: {salida}')
print(df_unificado.head())
print(df_unificado.info())

'''
# Reemplaza el caracter 'a' por el caracter 'o'
# Cambia 'a' y 'o' por los caracteres que necesites
nuevo_contenido = contenido.replace('¬', ';')

# Abre el archivo en modo escritura ('w') para guardar los cambios
with open('C:/Users/omarj/OneDrive/Documentos/Ucatolica/Saber_Pro/ProyectoVA/Modelos_VA/Data/SPtxt/SaberPro_2021.txt', 'w', encoding='utf-8') as file:
    # Escribe el nuevo contenido en el archivo
    file.write(nuevo_contenido)

# Datos de ejemplo
df = pd.DataFrame({
    'Competencia': ['Lectura Crítica', 'Razonamiento Cuantitativo', 'Inglés', 'Competencias Ciudadanas'],
    'Promedio': [165, 155, 160, 150]
})

# Crear gráfico interactivo
fig = px.bar(df, x='Competencia', y='Promedio',
             title='Resultados Saber Pro por Competencia',
             color='Competencia',
             text='Promedio')

# Exportar a HTML (auto-contenido)
fig.write_html("grafico_saberpro.html", include_plotlyjs='cdn', full_html=False)
'''