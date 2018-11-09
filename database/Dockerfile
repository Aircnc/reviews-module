FROM mysql:5.7.23

ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

COPY ./dump.sql /docker-entrypoint-initdb.d

CMD ["--default-authentication-plugin=mysql_native_password"]



# mysqldump -u root --add-drop-database --databases reviews_module > dump.sql

