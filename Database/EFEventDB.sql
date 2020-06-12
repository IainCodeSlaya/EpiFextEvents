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

CREATE TABLE [Visitor] (
 [VisitorID] int IDENTITY(1,1) PRIMARY KEY,
 [VisitorName] varchar(20),
 [VisitorSurname] varchar(30),
 [VisitorCompany] varchar(30),
 [VisitorEmail] varchar(30),
 [VisitorContactNo] varchar(12)
);

INSERT INTO [dbo].[Visitor] VALUES ('Gaz','Philips','GayDar','queeR@gmail.com','0791060843')

CREATE TABLE [VehicleColour] (
 [VehicleColourID] int IDENTITY(1,1) PRIMARY KEY,
 [Colour] varchar(10)
);

INSERT INTO [dbo].[VehicleColour] VALUES ('Red')
INSERT INTO [dbo].[VehicleColour] VALUES ('Green')
INSERT INTO [dbo].[VehicleColour] VALUES ('Blue')
INSERT INTO [dbo].[VehicleColour] VALUES ('Purple')
INSERT INTO [dbo].[VehicleColour] VALUES ('Orange')
INSERT INTO [dbo].[VehicleColour] VALUES ('Black')
INSERT INTO [dbo].[VehicleColour] VALUES ('White')
INSERT INTO [dbo].[VehicleColour] VALUES ('Silver')
INSERT INTO [dbo].[VehicleColour] VALUES ('Gold')


CREATE TABLE [Vehicle] (
 [VehicleID] int IDENTITY(1,1) PRIMARY KEY,
 [VehicleRegistration] varchar(12),
 [VehicleBrand] varchar(12),
 [VehicleModel] varchar(12),
 [VehicleColourID] int FOREIGN KEY REFERENCES [VehicleColour]([VehicleColourID]),
 [VisitorID] int FOREIGN KEY REFERENCES [Visitor]([VisitorID])
);

INSERT INTO [dbo].[Vehicle] VALUES ('CR 96 SL','Hyundai','i20',7,1)

CREATE TABLE [DietaryRequirement] (
 [DietaryRequirementID] int IDENTITY(1,1) PRIMARY KEY,
 [DietaryRequirementDesc] varchar(200),
 [DietaryRequirementName] varchar(25)
);

INSERT INTO [dbo].[DietaryRequirement] VALUES ('Bitches','Vegan')
INSERT INTO [dbo].[DietaryRequirement] VALUES ('Not Really Bitches but still bitches','Vegaterian')
INSERT INTO [dbo].[DietaryRequirement] VALUES ('Dietary Requirement for Islamic beliefs where they cant eat pork or non halal meat ','Halal')

CREATE TABLE [AttendeeStatus] (
 [AttendeeStatusID] int IDENTITY(1,1) PRIMARY KEY,
 [AttendeeStatusDesc] varchar(15)
);

INSERT INTO [dbo].[GuestStatus] VALUES ('Invited')
INSERT INTO [dbo].[GuestStatus] VALUES ('Accepted')
INSERT INTO [dbo].[GuestStatus] VALUES ('Declined')
INSERT INTO [dbo].[GuestStatus] VALUES ('Arrived')
INSERT INTO [dbo].[GuestStatus] VALUES ('Food Collected')

CREATE TABLE [EventGuest] (
 [EventGuestID] int IDENTITY(1,1) PRIMARY KEY,
 [EventID] int FOREIGN KEY REFERENCES [Event]([EventID]),
 [VisitorID] int FOREIGN KEY REFERENCES [Visitor]([VisitorID]),
 [AttendeeStatusID] int FOREIGN KEY REFERENCES [AttendeeStatus]([AttendeeStatusID]),
 [DietaryRequirementID] int FOREIGN KEY REFERENCES [DietaryRequirement]([DietaryRequirementID]),
 [GuestQRCode] varchar(10)
);

INSERT INTO [dbo].[EventGuest] VALUES (1,1,1,1,'qrcode')

CREATE TABLE [EventEmployee] (
 [EventEmployeeID] int IDENTITY(1,1) PRIMARY KEY,
 [EventID] int FOREIGN KEY REFERENCES [Event]([EventID]),
 [EmployeeID] int FOREIGN KEY REFERENCES [Employee]([EmployeeID]),
 [AttendeeStatusID] int FOREIGN KEY REFERENCES [AttendeeStatus]([AttendeeStatusID]),
 [DietaryRequirementID] int FOREIGN KEY REFERENCES [DietaryRequirement]([DietaryRequirementID]),
 [GuestQRCode] varchar(10)
);

INSERT INTO [dbo].[EventEmployee] VALUES (1,1,1,1,'qrcode')

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