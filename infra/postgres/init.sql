-- Create multiple databases for microservices
CREATE DATABASE identity_db;
CREATE DATABASE mosque_db;
CREATE DATABASE prayer_db;
CREATE DATABASE community_db;
CREATE DATABASE governance_db;
CREATE DATABASE library_db;
CREATE DATABASE finance_db;
CREATE DATABASE notification_db;

-- Grant privileges (optional depending on image, usually done by POSTGRES_USER)
GRANT ALL PRIVILEGES ON DATABASE identity_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE mosque_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE prayer_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE community_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE governance_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE library_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE finance_db TO "user";
GRANT ALL PRIVILEGES ON DATABASE notification_db TO "user";
