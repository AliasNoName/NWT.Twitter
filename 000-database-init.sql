/*
 SQL querys for creating DB in MS-SQL
*/

create database Twitter

create table Location(
	ID			int				not null primary key identity,
	Name		varchar(50)		not null,
	Geo_width	float			not null,
	Geo_height	float			not null
)

create table Users(
	Id			int 			not null primary key identity,
	Name		nvarchar(20)	not null,
	Surname		nvarchar(20)	not null,
	Nickname	nvarchar(20)	not null,
	Picture_URL	nvarchar(max)	not null,
		
	Location	int			references Location(ID)
)

create table Tweet(
	ID			int				not null primary key identity,
	Text		varchar(140)	not null,

	Author		int				not null references Users(Id)
)

create table Hashtag(
	ID			int				not null primary key identity,
	Text		nvarchar(139)	not null 
)

create table Comment(
	ID			int				not null primary key identity,
	Text		nvarchar(max)	not null,

	Tweet		int				not null references Tweet(ID),
	Author		int				not null references Users(ID)
)

create table FavouriteTweet(
	Id				int			not null primary key identity,
	
	User_favourite	int			not null references Users(Id),
	Tweet			int			not null references Tweet(ID)
)

create table TweetHashtagMapping (
	Tweet	int					not null references Tweet(ID),
	Hashtag	int					not null references Hashtag(ID),
	primary key (Tweet,Hashtag)
)

create table UserFollowsUser(
	Follower int not null references Users(Id),
	Followed int not null references Users(Id),

	primary key(Follower,Followed)
)
