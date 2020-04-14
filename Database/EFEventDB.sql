USE [master]
GO

IF EXISTS (SELECT name FROM sys.databases WHERE name = N'EpiFexEvent')
 DROP DATABASE EpiFexEvent
GO

CREATE DATABASE EpiFexEvent
GO

USE EpiFexEvent
GO

CREATE TABLE [Employee]  (
  [EmployeeID] int IDENTITY(1,1) PRIMARY KEY not null,
  [EmployeeName] varchar(20) not null,
  [EmployeeSurname] varchar(30) not null,
  [EmployeeEmail] varchar(30) not null,
  [EmployeeContact] varchar(12) not null,
  [EmployeeNumber] varchar(10) not null
);

INSERT INTO [dbo].[Employee] VALUES ('Iain','Steyn','IainSteyn@gmail.com','0791060843','15151515')
INSERT INTO [dbo].[Employee] VALUES ('Larry','Red','Red@gmail.com','0791060843','16161616')
INSERT INTO [dbo].[Employee] VALUES ('Cassie','Perkett','Cassie@gmail.com','0791060843','171717171')
INSERT INTO [dbo].[Employee] VALUES ('Bernhardt','Du Toit','Bernny@gmail.com','0791060843','18181818')
INSERT INTO [dbo].[Employee] VALUES ('Bryon','Surname','Bryon@gmail.com','0791060843','19191919')
INSERT INTO [dbo].[Employee] VALUES ('Abhishek','Matthews','Abhi@gmail.com','0791060843','20202020')

CREATE TABLE [EventActivity] (
 [EventActivityID] int IDENTITY(1,1) PRIMARY KEY,
 [ActivityStartTime] time,
 [ActivityEndTime] time,
 [ActivityTitle] varchar(30),
 [ActivityLocation] varchar(50),
 [ActivityDesc] varchar(200)
);

INSERT INTO [dbo].[EventActivity] VALUES ('07:00','9:00','Iains Talk','Iains Pad','Iain says how cool he is')
--INSERT INTO [dbo].[EventActivity] VALUES ('09:00','11:00','Cassies Talk','Cassies Pad','Cassie says how cool she is')
--INSERT INTO [dbo].[EventActivity] VALUES ('11:00','13:00','Bernies Talk','Bernies Pad','Bernny says how cool he is')
--INSERT INTO [dbo].[EventActivity] VALUES ('13:00','15:00','Jaqis Talk','Jaqis Pad','Jaqi says how cool he is')
--INSERT INTO [dbo].[EventActivity] VALUES ('17:00','19:00','Abhis Talk','Abhis Pad','Abhi says how cool he is')


CREATE TABLE [EventType] (
 [EventTypeID] int IDENTITY(1,1) PRIMARY KEY,
 [EventTypeDesc] varchar(20)
);

INSERT INTO [dbo].[EventType] VALUES ('EPI-USE Friday')
INSERT INTO [dbo].[EventType] VALUES ('ERP')
INSERT INTO [dbo].[EventType] VALUES ('Company Talk')

CREATE TABLE [Event] (
 [EventID] int IDENTITY(1,1) PRIMARY KEY,
 [EventDate] date,
 [EventStartTime] time,
 [EventEndTime] time,
 [EventTitle] varchar(40),
 [GuestCount] int,
 [EventLocation] varchar(140),
 [IsCaterer] bit,
 [EventTypeID] int FOREIGN KEY REFERENCES [EventType]([EventTypeID])
);

INSERT INTO [dbo].[Event] VALUES ('02-12-2020','07:00','19:00','Team Mutha Fucken Runtime Terror',200,'1260 Prospect street Hatfield',1,1)

CREATE TABLE [Guest] (
 [GuestID] int IDENTITY(1,1) PRIMARY KEY,
 [GuestName] varchar(20),
 [GuestSurname] varchar(30),
 [GuestEmail] varchar(30),
 [GuestContact] varchar(12)
);

INSERT INTO [dbo].[Guest] VALUES ('Gaz','Philips','queer@gmail.com','0791060843')

CREATE TABLE [DietaryRequirement] (
 [DietaryRequirementID] int IDENTITY(1,1) PRIMARY KEY,
 [DietaryRequirementDesc] varchar(200),
 [DietaryRequirementName] varchar(25)
);

INSERT INTO [dbo].[DietaryRequirement] VALUES ('Bitches','Vegan')
INSERT INTO [dbo].[DietaryRequirement] VALUES ('Not Really Bitches but still bitches','Vegaterian')
INSERT INTO [dbo].[DietaryRequirement] VALUES ('Dietary Requirement for Islamic beliefs where they cant eat pork or non halal meat ','Halal')

CREATE TABLE [GuestStatus] (
 [GuestStatusID] int IDENTITY(1,1) PRIMARY KEY,
 [GuestStatusDesc] varchar(15)
);

INSERT INTO [dbo].[GuestStatus] VALUES ('Invited')
INSERT INTO [dbo].[GuestStatus] VALUES ('Accepted')
INSERT INTO [dbo].[GuestStatus] VALUES ('Declined')
INSERT INTO [dbo].[GuestStatus] VALUES ('Arrived')
INSERT INTO [dbo].[GuestStatus] VALUES ('Food Collected')

CREATE TABLE [EventGuest] (
 [EventGuestID] int IDENTITY(1,1) PRIMARY KEY,
 [EventID] int FOREIGN KEY REFERENCES [Event]([EventID]),
 [GuestID] int FOREIGN KEY REFERENCES [Guest]([GuestID]),
 [GuestStatusID] int FOREIGN KEY REFERENCES [GuestStatus]([GuestStatusID]),
 [DietaryRequirementID] int FOREIGN KEY REFERENCES [DietaryRequirement]([DietaryRequirementID]),
 [GuestQRCode] varchar(10)
);

INSERT INTO [dbo].[EventGuest] VALUES (1,1,1,1,'qrcode')

CREATE TABLE [EventEmployee] (
 [EventEmployeeID] int IDENTITY(1,1) PRIMARY KEY,
 [EventID] int FOREIGN KEY REFERENCES [Event]([EventID]),
 [EmployeeID] int FOREIGN KEY REFERENCES [Employee]([EmployeeID]),
 [GuestStatusID] int FOREIGN KEY REFERENCES [GuestStatus]([GuestStatusID]),
 [DietaryRequirementID] int FOREIGN KEY REFERENCES [DietaryRequirement]([DietaryRequirementID]),
 [GuestQRCode] varchar(10)
);

INSERT INTO [dbo].[EventEmployee] VALUES (1,1,1,1,'qrcode')

CREATE TABLE [EventActivitySpeaker] (
 [SpeakerID] int IDENTITY(1,1) PRIMARY KEY,
 [EventEmployeeID] int FOREIGN KEY REFERENCES [EventEmployee]([EventEmployeeID]),
 [EventActivityID] int FOREIGN KEY REFERENCES [EventActivity]([EventActivityID])
);

INSERT INTO [dbo].[EventActivitySpeaker] VALUES (1,1)

--CREATE TABLE [User] (
-- [User_ID] int IDENTITY(1,1) PRIMARY KEY,
-- [Last_Login] numeric,
-- [Email] varchar(50),
-- [User_Password] varchar(20)
--);

--INSERT INTO [dbo].[User] VALUES (02052019,'MalokaD@AnalysisD.com','doreenisthebest')
--INSERT INTO [dbo].[User] VALUES (02052019,'MalokaD@icloud.com','iainisaclosesecond')
--INSERT INTO [dbo].[User] VALUES (02052019,'MalokaD@icloud.com','iainisaclosesecond')
--INSERT INTO [dbo].[User] VALUES (02052019,'MalokaD@icloud.com','iainisaclosesecond')
--INSERT INTO [dbo].[User] VALUES (02052019,'MalokaD@icloud.com','iainisaclosesecond')
--INSERT INTO [dbo].[User] VALUES (02052019,'MalokaD@icloud.com','iainisaclosesecond')