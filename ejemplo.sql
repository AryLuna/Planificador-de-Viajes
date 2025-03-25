

SELECT *
FROM database;
WHERE NOMBRE = (
    SELECT NOMBRE
    WHERE user = user
    from users
);
