import { createAction, props } from '@ngrx/store';
import { ClassJob } from '../../types/ffx/classjobresult';

export const setServers = createAction('[FFX] Set Servers', props<{servers: string[]}>());
export const setClasses = createAction('[FFX] Set Classes', props<{classes: ClassJob[]}>());