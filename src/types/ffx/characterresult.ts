export interface CharacterResult {
  Achievements?: any;
  AchievementsPublic?: any;
  Character: Character;
  FreeCompany?: any;
  FreeCompanyMembers?: any;
  Friends?: any;
  FriendsPublic?: any;
  Minions?: any;
  Mounts?: any;
  PvPTeam?: any;
}

interface Character {
  ActiveClassJob: ActiveClassJob;
  Avatar: string;
  Bio: string;
  ClassJobs: ClassJob[];
  ClassJobsBozjan: ClassJobsBozjan;
  ClassJobsElemental: ClassJobsElemental;
  DC: string;
  FreeCompanyId?: any;
  FreeCompanyName?: any;
  GearSet: GearSet;
  Gender: number;
  GrandCompany: GrandCompany;
  GuardianDeity: number;
  ID: number;
  Lang?: any;
  Name: string;
  Nameday: string;
  ParseDate: number;
  Portrait: string;
  PvPTeamId?: any;
  Race: number;
  Server: string;
  Title: number;
  TitleTop: boolean;
  Town: number;
  Tribe: number;
}

interface GrandCompany {
  NameID: number;
  RankID: number;
}

interface GearSet {
  Attributes: Attributes;
  ClassID: number;
  Gear: Gear;
  GearKey: string;
  JobID: number;
  Level: number;
}

interface Gear {
  Body: Body;
  Bracelets: Body;
  Earrings: Body;
  Feet: Body;
  Hands: Body;
  Head: Body;
  Legs: Body;
  MainHand: Body;
  Necklace: Body;
  Ring1: Body;
  Ring2: Body;
  SoulCrystal: Body;
}

interface Body {
  Creator?: any;
  Dye?: any;
  ID: number;
  Materia: any[];
  Mirage?: any;
}

interface Attributes {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '19': number;
  '20': number;
  '21': number;
  '22': number;
  '24': number;
  '27': number;
  '33': number;
  '34': number;
  '44': number;
  '45': number;
  '46': number;
}

interface ClassJobsElemental {
  ExpLevel: number;
  ExpLevelMax: number;
  ExpLevelTogo: number;
  Level: number;
  Name: string;
}

interface ClassJobsBozjan {
  Level?: any;
  Mettle?: any;
  Name: string;
}

interface ClassJob {
  ClassID: number;
  ExpLevel: number;
  ExpLevelMax: number;
  ExpLevelTogo: number;
  IsSpecialised: boolean;
  JobID: number;
  Level: number;
  Name: string;
  UnlockedState: UnlockedState2;
}

interface UnlockedState2 {
  ID?: number;
  Name: string;
}

interface ActiveClassJob {
  ClassID: number;
  ExpLevel: number;
  ExpLevelMax: number;
  ExpLevelTogo: number;
  IsSpecialised: boolean;
  JobID: number;
  Level: number;
  Name: string;
  UnlockedState: UnlockedState;
}

interface UnlockedState {
  ID: number;
  Name: string;
}