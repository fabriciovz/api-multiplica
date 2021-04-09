api-container-up:
	docker run --name API_MULTIPLICA -p 8024:8024 -d fabribraguev/api-multiplica

api-image-up:
	docker build -t fabribraguev/api-multiplica -f Dockerfile.production .

api-init:
	make api-image-up
	make api-container-up

api-start:
	docker start API_MULTIPLICA

api-stop:
	docker stop API_MULTIPLICA

api-rm-container:
	docker rm API_MULTIPLICA

api-stop-rm:
	make api-stop
	make api-rm-container

api-rm-image:
	docker rmi fabribraguev/api-multiplica

api-reset:
	make api-stop-rm
	make api-rm-image
	make api-init

api-uninstall:
	make api-stop-rm
	make api-rm-image

api-bash:
	docker exec -it API_MULTIPLICA bash

api-init-test:
	docker build -t fabribraguev/api-multiplica-test -f Dockerfile.test .
	docker run --rm fabribraguev/api-multiplica-test 

api-run-test:
	docker run --rm fabribraguev/api-multiplica-test 

api-rm-test:
	docker rmi fabribraguev/api-multiplica-test