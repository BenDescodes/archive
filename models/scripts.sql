-- creation de la base des données Archive
CREATE daTABASE IF NOT EXISTS archive CHARSET 'utf8';
use archive;
-- creation de la table grade
CREATE TABLE IF NOT EXISTS grade(
    id_grade INT PRIMARY KEY AUTO_INCREMENT,
    grade VARCHAR(100),
    description TEXT
)ENGINE=InnoDB;
-- insertion dans la table grade
INSERT INTO grade(grade) 
VALUES('PerCi'),('Sous-Lieutenant '),('Lieutenant'),('Capitaine'),('Major'),('Lieutenant-Colonel'),('Lieutenant-Colonel'),
('Général de Brigade'),('Général-Major'),('Lieutenant Général'),('Général d''Armée');

-- creation de la table personnel
/* CREATE TABLE IF NOT EXISTS personnel(
    id_personnel INT PRIMARY KEY AUTO_INCREMENT,
    profil VARCHAR(50) Default 'profil.png',
    nom VARCHAR(50) NOT NULL,
    postnom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50)NOT NULL,
    sexe CHAR(1),
    adresse TEXT,
    telephone VARCHAR(15),
    date_creation datetime DEFAULT CURRENT_TIMESTAMP,
    grade_id INT,
    CONSTRAINT fk_grade_id FOREIGN KEY(grade_id) REFERENCES grade(id_grade) ON DELETE SET NULL ON UPDATE CASCADE
)ENGINE=InnoDB; */
-- CREATION TABLE Droit d'accès
/* INSERT INTO personnel(nom, postnom, prenom, sexe, adresse, tel,grade_id) 
VALUES('Bonda','Matambeke','Benjamin','M','06, Av géometre Q/Kinsuka C/Ngaliema','+243894590707',1);
INSERT INTO personnel(nom, postnom, prenom, sexe, adresse, tel,grade_id) 
VALUES('Agarowa','Kakiese','Jospin','M','945, Av Tourismme Q/Kinsuka C/Ngaliema','+243826804555',2); */

CREATE TABLE IF NOT EXISTS da(
    id_da INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(50),
    desc_role TEXT
)ENGINE=InnoDB;

INSERT INTO da(role,desc_role) VALUES('Consultant','Cet Utilisateur a seulement le droit de consulter  les archives'),('Gestionnaire','Cet Utilisateur a le droit de Consulter et de modifier un archive s''il a une autorisation'),
('Archiviste','Cet Utilisateur a le droit d''enregistrement et de modification s''il a l''autorisation'),('Administration','Cet Utilisateur a le droit de tous faire');

-- création table utilisateur 

CREATE TABLE IF NOT EXISTS users(
    id_users INT PRIMARY KEY AUTO_INCREMENT,
    nom_complet TEXT,
    login VARCHAR(50),
    password TEXT,
    statut BOOLEAN DEFAULT 1,
    date_creation datetime DEFAULT CURRENT_TIMESTAMP,
    da_id INT,
    grade_id INT,
    CONSTRAINT fk_grade_id FOREIGN KEY(grade_id) REFERENCES grade(id_grade) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_da_id FOREIGN KEY(da_id) REFERENCES da(id_da) ON UPDATE CASCADE
)ENGINE=InnoDB;

-- insertion des données dans la table users
INSERT INTO users(nom_complet,login,password,grade_id,da_id) 
VALUES('Bonda Benjamin','Benji',sha1('1234'),7,4);

-- j'ai creer un vue qui melange quatre table personnel, users, da, archive

CREATE OR REPLACE VIEW v_user AS 
SELECT id_users,nom_complet,login,password,statut,date_creation,role,grade FROM users
INNER JOIN da ON id_da = da_id
INNER JOIN grade ON id_grade = grade_id;














CREATE OR REPLACE VIEW V_user AS 
SELECT * FROM users 
LEFT JOIN personnel ON users.pers_id = personnel.id_personnel 
INNER JOIN da ON users.da_id = da.id_da 
INNER JOIN grade ON personnel.grade_id = grade.id_grade ORDER BY id_users;


-- j'ai crée la table categorie

CREATE TABLE IF NOT EXISTS categorie(
    id_cat INT AUTO_INCREMENT PRIMARY KEY,
    cat VARCHAR(50),
    duree INT NOT NULL
)ENGINE=InnoDB;

INSERT INTO categorie(cat, duree) VALUES('Archive Courant','10'),('Archive Intermediaire','30'),('Archive Definitive','100');

CREATE TABLE IF NOT EXISTS emplacement(
    id_empl INT AUTO_INCREMENT PRIMARY KEY,
    emp VARCHAR(50)
)ENGINE = InnoDB;
INSERT INTO emplacement(emp) VALUES('Armoire 001'),('Armoire 002'),('Armoire 003'),('Armoire 004'),('Armoire 005'),('Armoire 006'),('Armoire 007')
,('Armoire 008'),('Armoire 009'),('Armoire 010');

-- j'ai crée la table archives en enlevant quelque restriction sur le clés etrangères
CREATE TABLE IF NOT EXISTS observation(
    id_obs INT AUTO_INCREMENT PRIMARY KEY,
    obs VARCHAR(150),
    description TEXT
)Engine = InnoDB;

CREATE TABLE IF NOT EXISTS archive(
    id_archive INT AUTO_INCREMENT PRIMARY KEY,
    intitule TEXT,
    description TEXT,
    date_creation daTETIME DEFAULT NOW(),
    date_expiration daTETIME,
    img TEXT,
    doc TEXT,
    users_id INT,
    emp_id INT,
    cat_id INT,
    obs_id INT,
    CONSTRAINT fk_archive_id FOREIGN KEY(users_id) REFERENCES users(id_users) ON UPDATE CASCADE,
    CONSTRAINT fk_archive_emp_id FOREIGN KEY(emp_id) REFERENCES emplacement(id_empl) ON UPDATE CASCADE,
    CONSTRAINT fk_archive_cat_id FOREIGN KEY(cat_id) REFERENCES categorie(id_cat) ON UPDATE CASCADE,
    CONSTRAINT fk_archive_obs_id FOREIGN KEY(obs_id) REFERENCES observation(id_obs) ON UPDATE CASCADE
)ENGINE = InnoDB;

INSERT INTO observation(obs, description) VALUES('Sans arret','pas de jugement'), ('Arret','Jugement prononcé'),('Minute','C''est un arret conserver en manuscrit'),('Piece','le document n''est pas complet');

CREATE TABLE IF NOT EXISTS image(
    id_img INT AUTO_INCREMENT PRIMARY KEY,
    img TEXT,
    archive_id INT,
    CONSTRAINT fk_image_id FOREIGN KEY(archive_id) REFERENCES archive(id_archive) ON UPDATE CASCADE ON DELETE CASCADE
)Engine = InnoDB;

/* CREATE TABLE IF NOT EXISTS document(
    id_doc INT AUTO_INCREMENT PRIMARY KEY,
    doc TEXT,
    archive_id INT,
    CONSTRAINT fk_doc_id FOREIGN KEY(archive_id) REFERENCES archive(id_archive) ON UPDATE CASCADE ON DELETE CASCADE
)Engine = InnoDB;

CREATE TABLE IF NOT EXISTS video(
    id_vid INT AUTO_INCREMENT PRIMARY KEY,
    video TEXT,
    archive_id INT,
    CONSTRAINT fk_vid_id FOREIGN KEY(archive_id) REFERENCES archive(id_archive) ON UPDATE CASCADE ON DELETE CASCADE
)Engine = InnoDB; */

-- VUE D'AFFICHAGE DES ARCHIVES

CREATE OR REPLACE VIEW v_archive AS
SELECT id_archive,intitule,archive.description,archive.img as img_cover,doc, image.img image_archive,cat,emp,obs,duree,DATE_FORMAT(archive.date_creation,'%d/%m/%Y') date_creation FROM archive 
INNER JOIN categorie ON cat_id = id_cat
INNER JOIN emplacement ON emp_id=  id_empl
INNER JOIN observation ON obs_id = id_obs
INNER JOIN image ON  archive_id = id_archive;

-- FIN

/* 
CREATE OR REPLACE VIEW V_archive_image AS
SELECT id_archive, Intitule, id_img, Nom_image FROM Archive
INNER JOIN Images ON archive_id = id_archive;

CREATE OR REPLACE VIEW V_archive_doc AS
SELECT id_archive, Intitule, id_doc, Nom_doc FROM Archive
INNER JOIN Documents ON D_archive_id = id_archive;

CREATE OR REPLACE VIEW V_archive_vid AS
SELECT id_archive, Intitule, id_vid, Nom_vid FROM Archive
INNER JOIN Video ON V_archive_id = id_archive; */