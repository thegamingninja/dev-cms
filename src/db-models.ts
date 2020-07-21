import { 
    DataTypes, 
    Model
} from './deps.ts';

export class PageDb extends Model {
    static table = 'dc_pages';
    static timestamps = true;

    static fields = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        route: {
            type: DataTypes.STRING,
            unique: true,
        },
        title: DataTypes.STRING,
        style: DataTypes.enum(['default', 'landing']),
        content: {
            type: DataTypes.STRING,
            length: 10240,
            allowNull: true
        },
        type: DataTypes.enum(['markdown', 'template']),
        published: {
            type: DataTypes.DATETIME,
            allowNull: true
        }  
    };
}

type PageStyle = 'default' | 'landing';

type ContentType = 'markdown' | 'template';

export interface Page {
    id: string;
    route: string;
    title: string;
    style: PageStyle,
    content?: string;
    type: ContentType;
    published?: Date;
}