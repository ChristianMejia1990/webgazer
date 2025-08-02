Aquí tienes un README único, breve y claro:

---

# README

## Error al usar WebGazer.js sin servidor local

Si al abrir tu archivo HTML ves este mensaje:

```
WebGazer works only over https. If you are doing local development, you need to run a local server.
```

Es porque WebGazer necesita HTTPS o un servidor local para acceder a la cámara.

### Cómo solucionarlo

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta un servidor local, por ejemplo con Python:

```bash
python -m http.server 8000
```

3. En tu navegador abre:

```
http://localhost:8000/
```

Esto permitirá que WebGazer pida permiso para la cámara y funcione correctamente.

---

Si quieres te ayudo con otros comandos o servidores.
