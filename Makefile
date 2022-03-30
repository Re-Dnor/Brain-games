install :
					npm ci    	#Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).

brain-games:
					node bin/brain-games.js

publish: 
					npm publish --dry-run