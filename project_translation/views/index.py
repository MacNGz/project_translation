"""
Project Translation index (main) view.

URLs include:
/
"""
import flask
import project_translation


@project_translation.app.route('/')
def show_index():
    """Display / route."""
    context = {}
    return flask.render_template("index.html", **context)