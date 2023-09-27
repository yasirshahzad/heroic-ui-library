import n from '../../node_modules/rollup-plugin-styles/dist/runtime/inject-css.js';
var css = "/* Tag Button  */\n.Tab_module_btn__tabs__959181c5 {\n  border: 0;\n  cursor: pointer;\n  text-shadow: 1px 1px black;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  font-size: 3rem;\n  color: #ffffff;\n  font-family: 'Brady Bunch Remastered';\n  text-transform: uppercase;\n  transition: transform 0.2s;\n  line-height: 1;\n  padding: 0rem 1rem 0.4rem 1rem;\n  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyNTYgOTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICM1NjliZjk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRhcmtlbjsKICAgICAgfQoKICAgICAgLmNscy0yLAogICAgICAuY2xzLTMsCiAgICAgIC5jbHMtNCwKICAgICAgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGlzb2xhdGlvbjogaXNvbGF0ZTsKICAgICAgfQoKICAgICAgLmNscy01IHsKICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xpcHBhdGgpOwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTI5IiB5MT0iMi40IiB4Mj0iMTI5IiB5Mj0iODQuOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5Y2M1ZmYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2OWJmOSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXBwYXRoIj4KICAgICAgPHBvbHlnb24gaWQ9IkJHLTIiIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIyNTIuMTEgODQuOCA2Ljg5IDgxLjIgMy44OSA0LjggMjU0LjExIDIuNCAyNTIuMTEgODQuOCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgICA8ZyBpZD0iVGFiX1JlZy1kZWZhdWx0Ij4KICAgICAgPHJlY3QgaWQ9IkJsYWNrIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjkwIiAvPgogICAgICA8cG9seWdvbiBpZD0iQkciIGNsYXNzPSJjbHMtNiIgcG9pbnRzPSIyNTIuMTEgODQuOCA2Ljg5IDgxLjIgMy44OSA0LjggMjU0LjExIDIuNCAyNTIuMTEgODQuOCIgLz4KICAgICAgPGcgaWQ9IkNoZWNrZXJzIj4KICAgICAgICA8ZyBjbGFzcz0iY2xzLTUiPgogICAgICAgICAgPGcgaWQ9IkNoZWNrZXJzLTIiIGNsYXNzPSJjbHMtMiI+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjM0LjY3IiB5PSI3MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE5IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIzNC42NyIgeT0iMzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMzQuNjciIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMTMuMzMiIHk9IjUxIiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMjAiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjEzLjMzIiB5PSIxNiIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjE1IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIxMy4zMyIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjYiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTkyIiB5PSI3MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE5IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE5MiIgeT0iMzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxOTIiIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxNzAuNjciIHk9IjUxIiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMjAiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTcwLjY3IiB5PSIxNiIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE1IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE3MC42NyIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTQ5LjMzIiB5PSI3MSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjE5IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE0OS4zMyIgeT0iMzEiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxNDkuMzMiIHk9IjYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMjgiIHk9IjUxIiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMjAiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTI4IiB5PSIxNiIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE1IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEyOCIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTA2LjY3IiB5PSI3MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE5IiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEwNi42NyIgeT0iMzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMDYuNjciIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4NS4zMyIgeT0iNTEiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4NS4zMyIgeT0iMTYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxNSIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4NS4zMyIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjYiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjQiIHk9IjcxIiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMTkiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjQiIHk9IjMxIiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMjAiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjQiIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI0Mi42NyIgeT0iNTEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI0Mi42NyIgeT0iMTYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxNSIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI0Mi42NyIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjEuMzMiIHk9IjcxIiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMTkiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjEuMzMiIHk9IjMxIiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMjAiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjEuMzMiIHk9IjYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxMCIgLz4KICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB5PSI1MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIiAvPgogICAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHk9IjE2IiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMTUiIC8+CiAgICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiIC8+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-color: black;\n  min-width: 14rem;\n  height: 5rem;\n}\n\n/* Disable button */\n.Tab_module_btn__tabs__959181c5:disabled {\n  pointer-events: none;\n  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyNTYgOTAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtMSwuY2xzLTIsLmNscy0zLC5jbHMtNHtzdHJva2Utd2lkdGg6MHB4O30uY2xzLTV7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtM3tmaWxsOm5vbmU7fS5jbHMtNHtmaWxsOiM4ODllYmQ7fS5jbHMtNnttaXgtYmxlbmQtbW9kZTpkYXJrZW47fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIxMjkiIHkxPSIyLjQiIHgyPSIxMjkiIHkyPSI4NC44IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYmRkNWY2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTBhOGI5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgY2xhc3M9ImNscy01Ij48ZyBpZD0iVGFiX1JlZy1kaXNhYmxlZCI+PHJlY3QgaWQ9IkJsYWNrIiBjbGFzcz0iY2xzLTIiIHdpZHRoPSIyNTYiIGhlaWdodD0iOTAiLz48cG9seWdvbiBpZD0iQkciIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyNTIuMTEgODQuOCA2Ljg5IDgxLjIgMy44OSA0LjggMjU0LjExIDIuNCAyNTIuMTEgODQuOCIvPjxnIGlkPSJMYXllcl84Ij48ZyBpZD0iQ2hlY2tlcnMtMyIgY2xhc3M9ImNscy02Ij48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjIzNC42NyIgeT0iNzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMjM0LjY3IiB5PSIzMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIyMzQuNjciIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMjEzLjMzIiB5PSI1MSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIyMTMuMzMiIHk9IjE2IiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMTUiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjIxMy4zMyIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjE5MiIgeT0iNzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTkyIiB5PSIzMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIxOTIiIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTcwLjY3IiB5PSI1MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIxNzAuNjciIHk9IjE2IiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMTUiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjE3MC42NyIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjE0OS4zMyIgeT0iNzEiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTQ5LjMzIiB5PSIzMSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIxNDkuMzMiIHk9IjYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTI4IiB5PSI1MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIxMjgiIHk9IjE2IiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMTUiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjEyOCIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjEwNi42NyIgeT0iNzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTA2LjY3IiB5PSIzMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIxMDYuNjciIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iODUuMzMiIHk9IjUxIiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMjAiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9Ijg1LjMzIiB5PSIxNiIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjE1Ii8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSI4NS4zMyIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjY0IiB5PSI3MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE5Ii8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSI2NCIgeT0iMzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iNjQiIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iNDIuNjciIHk9IjUxIiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMjAiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjQyLjY3IiB5PSIxNiIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE1Ii8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSI0Mi42NyIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjIxLjMzIiB5PSI3MSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjE5Ii8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSIyMS4zMyIgeT0iMzEiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIyMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMjEuMzMiIHk9IjYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeT0iNTEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeT0iMTYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxNSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48L2c+PHBvbHlnb24gaWQ9IkJHLTIiIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSIyNTIuMTEgODQuOCA2Ljg5IDgxLjIgMy44OSA0LjggMjU0LjExIDIuNCAyNTIuMTEgODQuOCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==');\n}\n\n.Tab_module_btn__tabs__959181c5:hover {\n  transform: scale(1.1);\n  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyNTYgOTAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7bWl4LWJsZW5kLW1vZGU6ZGFya2VuO30uY2xzLTEsLmNscy0yLC5jbHMtMywuY2xzLTR7ZmlsbDpub25lO30uY2xzLTJ7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwcGF0aC0xKTt9LmNscy01e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTZ7ZmlsbDojZmM3NzAzO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTI5IiB5MT0iMi40IiB4Mj0iMTI5IiB5Mj0iODQuOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZjMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmODQwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJjbGlwcGF0aC0xIj48cG9seWdvbiBpZD0iQkctMiIgY2xhc3M9ImNscy0zIiBwb2ludHM9IjI1Mi4xMSA4NC44IDYuODkgODEuMiAzLjg5IDQuOCAyNTQuMTEgMi40IDI1Mi4xMSA4NC44Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xhc3M9ImNscy0yIj48ZyBpZD0iVGFiX1JlZy1ob3ZlciI+PHJlY3QgaWQ9IkJsYWNrIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjkwIi8+PHBvbHlnb24gaWQ9IkJHIiBjbGFzcz0iY2xzLTUiIHBvaW50cz0iMjUyLjExIDg0LjggNi44OSA4MS4yIDMuODkgNC44IDI1NC4xMSAyLjQgMjUyLjExIDg0LjgiLz48ZyBpZD0iQ2hlY2tlcnMtMiI+PGcgY2xhc3M9ImNscy00Ij48ZyBpZD0iQ2hlY2tlcnMtMyIgY2xhc3M9ImNscy0xIj48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjIzNC42NyIgeT0iNzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMjM0LjY3IiB5PSIzMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIyMzQuNjciIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMjEzLjMzIiB5PSI1MSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIyMTMuMzMiIHk9IjE2IiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMTUiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjIxMy4zMyIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjE5MiIgeT0iNzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMTkyIiB5PSIzMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIxOTIiIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMTcwLjY3IiB5PSI1MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIxNzAuNjciIHk9IjE2IiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMTUiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjE3MC42NyIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjE0OS4zMyIgeT0iNzEiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMTQ5LjMzIiB5PSIzMSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIxNDkuMzMiIHk9IjYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMTI4IiB5PSI1MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIxMjgiIHk9IjE2IiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMTUiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjEyOCIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjEwNi42NyIgeT0iNzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxOSIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMTA2LjY3IiB5PSIzMSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjIwIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIxMDYuNjciIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iODUuMzMiIHk9IjUxIiB3aWR0aD0iMjEuMzQiIGhlaWdodD0iMjAiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9Ijg1LjMzIiB5PSIxNiIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjE1Ii8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI4NS4zMyIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjY0IiB5PSI3MSIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE5Ii8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI2NCIgeT0iMzEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iNjQiIHk9IjYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iNDIuNjciIHk9IjUxIiB3aWR0aD0iMjEuMzMiIGhlaWdodD0iMjAiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjQyLjY3IiB5PSIxNiIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjE1Ii8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI0Mi42NyIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjIxLjMzIiB5PSI3MSIgd2lkdGg9IjIxLjM0IiBoZWlnaHQ9IjE5Ii8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSIyMS4zMyIgeT0iMzEiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIyMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMjEuMzMiIHk9IjYiIHdpZHRoPSIyMS4zNCIgaGVpZ2h0PSIxMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeT0iNTEiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIyMCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeT0iMTYiIHdpZHRoPSIyMS4zMyIgaGVpZ2h0PSIxNSIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgd2lkdGg9IjIxLjMzIiBoZWlnaHQ9IjYiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==');\n}\n\n.Tab_module_btn__tabs_Selected__959181c5 {\n  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIGlkPSJUYWJfUmVnLXNlbGVjdGVkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU2IDkwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTJ7ZmlsbDojZmM3NzAzO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTI5IiB5MT0iMi40IiB4Mj0iMTI5IiB5Mj0iODQuOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZjMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmODQwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IGlkPSJCbGFjayIgd2lkdGg9IjI1NiIgaGVpZ2h0PSI5MCIvPjxwb2x5Z29uIGlkPSJCRyIgY2xhc3M9ImNscy0xIiBwb2ludHM9IjI1Mi4xMSA4NC44IDYuODkgODEuMiAzLjg5IDQuOCAyNTQuMTEgMi40IDI1Mi4xMSA4NC44Ii8+PGcgaWQ9InJheXMiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxMTYuMjIgODIuODEgMTI4IDQwIDEwOC40NCA4Mi42OSAxMTYuMjIgODIuODEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iOTcuNzkgODIuNTMgMTI4IDQwIDg2LjIgODIuMzYgOTcuNzkgODIuNTMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjcuMDQgODIuMDggMTI4IDQwIDQwLjE0IDgxLjY5IDY3LjA0IDgyLjA4Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjYuNTIgNzEuNjggMTI4IDQwIDUuNzIgNTEuNTIgNi41MiA3MS42OCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0LjgyIDI4LjM5IDEyOCA0MCA0IDcuNjYgNC44MiAyOC4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI1Mi44MiA0LjMzIDEyOCA0MCA3Ni4wMSA0LjExIDUyLjgyIDQuMzMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iOTIuNDMgMy45NSAxMjggNDAgMTAyLjMzIDMuODYgOTIuNDMgMy45NSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxMTEuNCAzLjc3IDEyOCA0MCAxMTguMDEgMy43MSAxMTEuNCAzLjc3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjEyNS4wNiAzLjY0IDEyOCA0MCAxMzAuOTQgMy41OCAxMjUuMDYgMy42NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxMzguMDQgMy41MSAxMjggNDAgMTQ0Ljc1IDMuNDUgMTM4LjA0IDMuNTEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTU0LjAyIDMuMzYgMTI4IDQwIDE2NC4yNSAzLjI2IDE1NC4wMiAzLjM2Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjE4MS40NiAzLjEgMTI4IDQwIDIwNi4yOCAyLjg2IDE4MS40NiAzLjEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMjU0IDcuMTQgMTI4IDQwIDI1My40OSAyOC4xOCAyNTQgNy4xNCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIyNTIuOTEgNTEuNzcgMTI4IDQwIDI1Mi40MSA3Mi40NSAyNTIuOTEgNTEuNzciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMjIxLjQ3IDg0LjM1IDEyOCA0MCAxOTEuNjEgODMuOTEgMjIxLjQ3IDg0LjM1Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjE3MS4wMyA4My42MSAxMjggNDAgMTU4Ljg0IDgzLjQzIDE3MS4wMyA4My42MSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxNDcuODMgODMuMjcgMTI4IDQwIDEzOS44NyA4My4xNSAxNDcuODMgODMuMjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTMxLjQ4IDgzLjAzIDEyOCA0MCAxMjQuNTMgODIuOTMgMTMxLjQ4IDgzLjAzIi8+PC9nPjwvc3ZnPg==');\n}\n";
var modules_2904f848 = {
  "btn__tabs": "Tab_module_btn__tabs__959181c5",
  "btn__tabs--selected": "Tab_module_btn__tabs_Selected__959181c5"
};
n(css, {});
export { css, modules_2904f848 as default };
//# sourceMappingURL=Tab.module.css.js.map
