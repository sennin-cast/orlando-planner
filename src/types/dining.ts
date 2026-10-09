/**
 * Modelos de dados para a funcionalidade ONDE COMER (Gastronomia)
 * Em total conformidade com a arquitetura normalizada de 4 camadas:
 * A. Fonte Editorial
 * B. Estabelecimento (Restaurante)
 * C. Evidência e Avaliação
 * D. Dados Pessoais do Roteiro
 */

export type OperationalStatus =
  | 'confirmed'
  | 'pending_confirmation'
  | 'outdated_info'
  | 'unavailable'
  | 'reported_closed'
  | 'source_conflict';

export type DiningOperator = 'disney' | 'universal' | 'seaworld' | 'independent' | 'chain';

export type DiningLocationType =
  | 'in_park'
  | 'disney_springs'
  | 'citywalk'
  | 'resort_hotel'
  | 'off_park';

export type ServiceType =
  | 'quick_service'
  | 'table_service'
  | 'buffet'
  | 'kiosk_snack'
  | 'bar_lounge'
  | 'fine_dining';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type PriceCategory = '$' | '$$' | '$$$' | '$$$$';

// A. Fonte editorial
export interface EditorialSource {
  source_id: string;
  canonical_url: string;
  article_title: string;
  publisher: string;
  author: string;
  published_at: string | null;
  updated_at: string | null;
  discovered_at: string;
  fetched_at: string | null;
  content_hash: string | null;
  category: string;
  crawl_status: 'discovered' | 'fetched' | 'pending' | 'failed';
  extraction_status: 'extracted' | 'pending' | 'manual_review';
}

// B. Estabelecimento
export interface Restaurant {
  restaurant_id: string;
  name: string;
  normalized_name: string;
  operator: DiningOperator;
  location_type: DiningLocationType;
  resort: string | null;
  park: string | null;
  park_area: string | null;
  shopping_center: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  cuisine_types: string[];
  service_type: ServiceType;
  meal_types: MealType[];
  price_category: PriceCategory | null;
  reservation_required: boolean;
  reservation_recommended: boolean;
  mobile_order_available: boolean;
  character_dining: boolean;
  characters: string[];
  dining_plan_eligibility: boolean | null;
  dietary_options: string[];
  accessibility_information: string | null;
  official_url: string | null;
  reservation_url: string | null;
  operational_status: OperationalStatus;
  last_verified_at: string | null;
  visibility: 'active' | 'historical_only';
  short_description: string;
  tips: string | null;
  source_ids: string[];
}

// C. Evidência e avaliação
export interface DiningEvidence {
  evidence_id: string;
  restaurant_id: string;
  source_id: string;
  field_name: string;
  extracted_value: string;
  source_excerpt_short: string;
  source_published_at: string | null;
  verified_at: string | null;
  verification_method: 'editorial_review' | 'official_site' | 'user_reported';
  confidence_level: 'high' | 'medium' | 'low';
  review_status: 'approved' | 'pending' | 'flagged';
}

// D. Dados pessoais do roteiro (refeição agendada)
export interface ScheduledMeal {
  meal_id: string;
  trip_id: string;
  restaurant_id: string;
  restaurant_name: string;
  visit_date: string; // YYYY-MM-DD
  meal_type: MealType;
  planned_time: string; // HH:MM
  reservation_status: 'confirmed' | 'needed_pending' | 'not_needed' | 'walk_in';
  reservation_reference: string | null;
  personal_notes: string | null;
  itinerary_day_id: string; // maps to date
  created_at: string;
}

// Critérios de filtro para a interface
export interface DiningFilterCriteria {
  searchQuery: string;
  categoryTab:
    | 'all'
    | 'in_park'
    | 'disney_springs'
    | 'citywalk'
    | 'resort_hotel'
    | 'off_park'
    | 'economic'
    | 'character_dining'
    | 'coffee_dessert'
    | 'favorites';
  locationType: 'all' | DiningLocationType;
  park: 'all' | string;
  mealType: 'all' | MealType;
  serviceType: 'all' | ServiceType;
  priceCategory: 'all' | PriceCategory;
  cuisine: 'all' | string;
  characterDiningOnly: boolean;
  reservationRequiredOnly: boolean;
  vegetarianOnly: boolean;
  confirmedOnly: boolean;
  favoritesOnly: boolean;
}

// Sugestão de refeição contextualizada para um dia do roteiro
export interface DiningSuggestion {
  restaurant: Restaurant;
  mealType: MealType;
  reason: string;
  convenienceScore: 'high' | 'medium';
  isPartialRecommendation: boolean;
  warningNote?: string;
}

export interface DiningDaySuggestion {
  restaurant_id: string;
  restaurant_name: string;
  meal_type: MealType;
  reason_summary: string;
  is_partial_recommendation: boolean;
  requires_advance_reservation: boolean;
  convenience_score: number;
}

// Relatório administrativo de auditoria
export interface DiningAdminReport {
  totalSources: number;
  totalArticlesFetched: number;
  totalErrors: number;
  totalRestaurants: number;
  activeCount: number;
  historicalClosedCount: number;
  confirmedCount: number;
  pendingConfirmationCount: number;
  outdatedCount: number;
  lastExecution: string;
  differencesDetected: number;
}

export interface DiningAuditSummary {
  sources_registered: number;
  discovered_urls_count: number;
  articles_found: number;
  articles_processed: number;
  errors_count: number;
  restaurants_identified: number;
  duplicates_count: number;
  pending_review_count: number;
  last_execution_date: string;
  version: string;
  version_diff_notes: string[];
}

export interface DiningCatalogData {
  schema_version: string;
  project: string;
  feature: string;
  generated_on: string;
  scope: {
    travel_period: {
      start: string;
      end: string;
    };
    locale: string;
    currency: string;
  };
  feature_flags: Record<string, boolean>;
  source_catalog: EditorialSource[];
  restaurants: Restaurant[];
  evidences: DiningEvidence[];
  display_rules: Record<string, any>;
  audit_summary: DiningAuditSummary;
}
