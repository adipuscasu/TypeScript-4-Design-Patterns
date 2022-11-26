class QueryBuilder {}
class EmptyQueryBuilder extends QueryBuilder {}
interface SearchParams {
    qb?: QueryBuilder;
    path: string;
}

class SearchService {
    queryBuilder?: QueryBuilder;
    path: string;
    constructor({qb = EmptyQueryBuilder, path}: SearchParams) {
        this.queryBuilder = qb;
        this.path = path;
    }
}