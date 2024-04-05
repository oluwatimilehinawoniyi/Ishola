export interface CategoryType {
	_id: string;
	title: string;
}

export interface PaperType {
	_id: string;
	categories: CategoryType[];
	title: string;
	subtitle: string;
	_createdAt: string;
	_updatedAt: string;
	image: string;
	body: string[];
	slug: string;
}
