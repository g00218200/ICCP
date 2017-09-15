@echo off
cd ..
set APP_HOME=%cd%

set JAVA_HOME=%APP_HOME%/jre

cd bin
start "" "%JAVA_HOME%/bin/javaw.exe" -classpath "%APP_HOME%/lib/DMManager.jar" -Djava.ext.dirs="%JAVA_HOME%/jre/lib/ext";"%APP_HOME%/lib/other" -Xms256m -Xmx512m my.package.name.Main
