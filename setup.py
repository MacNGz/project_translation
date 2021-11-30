from setuptools import setup

setup(
    name="project_translation",
    version="0.1.0",
    packages=["project_translation"],
    install_requires=[
        'arrow',
        'bs4',
        'Flask',
        'html5validator',
        'pycodestyle',
        'pydocstyle',
        'pylint',
        'pytest',
        'pytest-mock',
        'requests',
    ],
    entry_points={
        "console_scripts": [
            "project_translation = project_translation.__main__:main"
        ]
    }
)