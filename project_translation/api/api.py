"""
Project Translation API
"""

import flask
import project_translation
import pinyin
from google_trans_new import google_translator  

@project_translation.app.route('/api/v1/pinyin/', methods=['GET'])
def get_pinyin():
    """Get the pinyin for some Chinese"""
    han = flask.request.args.get('han')

    result = han_to_pinyin(han)
    english = han_to_english(han)

    print(english)

    return flask.jsonify(
        pinyin=result,
        translation=english
    )

def han_to_pinyin(han):
    return pinyin.get(han, delimiter=" ")

def han_to_english(han):
   translator = google_translator()
   return translator.translate(han, lang_src='zh', lang_tgt='en')