proto-server-gen:
	protoc --go_out=server --go_opt=paths=source_relative --go-grpc_out=server --go-grpc_opt=paths=source_relative proto/*.proto

proto-client-create-dir:
	mkdir -p ./client/src/proto

proto-client-gen: proto-client-create-dir
	protoc -I=. ./proto/*.proto --js_out=import_style=commonjs:./client/src --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src

proto-gen: proto-server-gen proto-client-gen